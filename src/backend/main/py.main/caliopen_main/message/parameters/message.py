# -*- coding: utf-8 -*-
"""Caliopen parameters for message related classes."""
from __future__ import absolute_import, print_function, unicode_literals

import hashlib

from schematics.models import Model
from schematics.types import (StringType, DateTimeType,
                              IntType, UUIDType, BooleanType)
from schematics.types.compound import ListType, ModelType, DictType
from schematics.transforms import blacklist

from .participant import Participant
from .attachment import Attachment
from .external_references import ExternalReferences
from caliopen_main.pi.parameters import PIParameter
import caliopen_storage.helpers.json as helpers

RECIPIENT_TYPES = ['To', 'From', 'Cc', 'Bcc', 'Reply-To', 'Sender']
MESSAGE_PROTOCOLS = ['email', 'twitter', None]
MESSAGE_STATES = ['draft', 'sending', 'sent', 'cancel',
                  'unread', 'read', 'deleted']


class NewMessage(Model):
    """New message parameter."""

    attachments = ListType(ModelType(Attachment), default=lambda: [])
    date = DateTimeType(serialized_format=helpers.RFC3339Milli,
                        tzd=u'utc')
    discussion_id = UUIDType()
    external_references = ModelType(ExternalReferences)
    importance_level = IntType()
    is_answered = BooleanType()
    is_draft = BooleanType()
    is_unread = BooleanType()
    is_received = BooleanType()
    message_id = UUIDType()
    parent_id = UUIDType()
    participants = ListType(ModelType(Participant), default=lambda: [])
    privacy_features = DictType(StringType(), default=lambda: {})
    pi = ModelType(PIParameter)
    raw_msg_id = UUIDType()
    subject = StringType()
    tags = ListType(StringType(), default=lambda: [])
    protocol = StringType(choices=MESSAGE_PROTOCOLS, required=False)
    user_identities = ListType(UUIDType(), default=lambda: [])

    class Options:
        serialize_when_none = False

    @property
    def hash_participants(self):
        """Create an hash from participants addresses for global lookup."""
        addresses = []
        for participant in self.participants:
            if participant.contact_ids:
                addresses.append(participant.contact_ids[0])
            else:
                addresses.append(participant.address.lower())
        addresses = list(set(addresses))
        addresses.sort()
        return hashlib.sha256(''.join(addresses)).hexdigest()


class NewInboundMessage(NewMessage):
    body_html = StringType()
    body_plain = StringType()


class Message(NewInboundMessage):
    """Existing message parameter."""

    body = StringType()
    user_id = UUIDType()
    date_insert = DateTimeType(serialized_format=helpers.RFC3339Milli,
                               tzd=u'utc')
    date_delete = DateTimeType(serialized_format=helpers.RFC3339Milli,
                               tzd=u'utc')
    date_sort = DateTimeType(serialized_format=helpers.RFC3339Milli,
                             tzd=u'utc')

    class Options:
        roles = {'default': blacklist('user_id', 'date_delete')}
        serialize_when_none = False
