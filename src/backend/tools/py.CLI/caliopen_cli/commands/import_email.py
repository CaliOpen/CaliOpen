"""
This script parse mail from a mbox or maildir format and import them.

User must be created before import

"""
from __future__ import absolute_import, print_function, unicode_literals

import os
import logging

from email import message_from_file
from mailbox import mbox, Maildir

from caliopen_storage.exception import NotFound

log = logging.getLogger(__name__)


def import_email(email, import_path, format, **kwargs):
    """Import emails for an user."""
    from caliopen_main.user.core import User
    from caliopen_main.contact.core import Contact, ContactLookup
    from caliopen_main.message.parsers.mail import MailMessage
    from caliopen_main.contact.parameters import NewContact, NewEmail
    from caliopen_nats.delivery import UserMessageDelivery
    from caliopen_main.message.core import RawMessage
    from caliopen_storage.config import Configuration

    max_size = int(Configuration("global").get("object_store.db_size_limit"))

    if format == 'maildir':
        emails = Maildir(import_path, factory=message_from_file)
        mode = 'maildir'
    else:
        if os.path.isdir(import_path):
            mode = 'mbox_directory'
            emails = {}
            files = [f for f in os.listdir(import_path) if
                     os.path.isfile(os.path.join(import_path, f))]
            for f in files:
                try:
                    log.debug('Importing mail from file {}'.format(f))
                    with open('%s/%s' % (import_path, f)) as fh:
                        emails[f] = message_from_file(fh)
                except Exception as exc:
                    log.error('Error importing email {}'.format(exc))
        else:
            mode = 'mbox'
            emails = mbox(import_path)

    user = User.by_local_identity(email)

    log.info("Processing mode %s" % mode)

    for key, data in emails.iteritems():
        # Prevent creating message too large to fit in db.
        # (should use inject cmd for large messages)
        size = len(data.as_string())
        if size > max_size:
            log.warn("Message too large to fit into db. \
            Please, use 'inject' cmd for importing large emails.")
            continue

        raw = RawMessage.create(data.as_string())
        log.debug('Created raw message {}'.format(raw.raw_msg_id))
        message = MailMessage(data.as_string())
        for participant in message.participants:
            # XXX development mode associate to participant to a contact
            try:
                ContactLookup.get(user, participant.address)
            except NotFound:
                log.info('Creating contact %s' % participant.address)
                name, domain = participant.address.split('@')
                contact_param = NewContact()
                contact_param.family_name = name
                if participant.address:
                    e_mail = NewEmail()
                    e_mail.address = participant.address
                    contact_param.emails = [e_mail]
                Contact.create(user, contact_param)

        processor = UserMessageDelivery(user)
        obj_message = processor.process_raw(raw.raw_msg_id)
        log.info('Created message {}'.format(obj_message.message_id))
