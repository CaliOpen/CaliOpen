import logging
import uuid

from cassandra.query import SimpleStatement
from cassandra.cluster import Cluster
from cassandra.query import dict_factory


from caliopen_storage.config import Configuration
from caliopen_main.user.core.user import User
from caliopen_main.user.core import allocate_user_shard
from caliopen_main.contact.objects.contact import Contact as ContactObject
from caliopen_main.contact.objects.email import Email as EmailObject

from caliopen_main.contact.core import ContactLookup

log = logging.getLogger(__name__)

EXCLUDE_COLUMS = ['tags']


def copy_contacts(user, only_id):
    conf = Configuration('global').configuration
    cluster_source = Cluster(conf['old_cassandra']['hosts'])
    source = cluster_source.connect(conf['old_cassandra']['keyspace'])
    source.row_factory = dict_factory
    query = "SELECT * from contact where user_id = {}".format(user.user_id)
    statement = SimpleStatement(query, fetch_size=200)
    cluster_dest = Cluster(conf['cassandra']['hosts'])
    dest = cluster_dest.connect(conf['cassandra']['keyspace'])
    insert_query = "INSERT INTO contact ({0}) VALUES ({1})"

    contact_ids = []
    for row in source.execute(statement):
        if not only_id:
            columns = []
            values = []
            binds = []
            for col, value in row.items():
                if col not in EXCLUDE_COLUMS:
                    columns.append(col)
                    values.append(value)
                    binds.append('?')

            col_str = ','.join(columns)
            col_bind = ','.join(binds)
            insert_str = insert_query.format(col_str, col_bind)
            insert = dest.prepare(insert_str)
            bound = insert.bind(values)
            dest.execute(bound)
        contact_ids.append(row['contact_id'])
    return contact_ids


def fix_user_contacts(user, new_domain, only_index=False):
    ids = copy_contacts(user, only_index)
    for id in ids:
        contact = ContactObject(user, contact_id=id)
        contact.get_db()
        contact.unmarshall_db()

        if not only_index:
            if str(user.contact_id) == str(id):
                log.info('Patching user contact')
                found = [x.address for x in contact.emails
                         if new_domain in x.address]
                if not found:
                    local_addr = '{}@{}'.format(user.name, new_domain)
                    log.info('Creating new address {}'.format(local_addr))
                    email = EmailObject(address=local_addr, type='home')
                    contact.emails.append(email)
                    contact.marshall_db()
                    contact.save_db()

            for email in contact.emails:
                ContactLookup.create(user=user, contact_id=id,
                                     value=email.address.lower(),
                                     type='email')
            for ident in contact.identities:
                ContactLookup.create(user=user, contact_id=id,
                                     value=ident.name.lower(),
                                     type=ident.type.lower())
        contact.create_index()


def migrate_user(model, new_domain):
    user = User(model)
    shard_id = allocate_user_shard(uuid.UUID(user.user_id))
    if model.shard_id != shard_id:
        model.shard_id = shard_id
        log.info('Allocate user {} to new shard {}'.
                 format(user.user_id, shard_id))
        model.save()
    try:
        local_part = user.name.replace('@', '').lower()
        local_address = '{}@{}'.format(local_part, new_domain)
        ident = user.add_local_identity(local_address)
        log.debug('Created identity {}'.format(ident.identity_id))
    except Exception as exc:
        log.exception('Error during identity creation for user {}: {}'.
                      format(user.user_id, exc))
        return False
    return True


def migrate_all_users(new_domain, count=None):
    cpt = 0
    for model in User._model_class.all():
        res = migrate_user(model, new_domain)
        if not res:
            break
        cpt += 1
        if count and cpt >= count:
            log.info("Limit to {} users, stop migration".format(count))
            break
