# Message management

## Create save send

![uml](./assets/message-create-save-send-20170202.png)

## Discussion association

A discussion can be directly associated to a message in case of a reply so the
participants will not be editable.

![uml discussion association](./assets/message_discussion_association-20190327.png)

## Reply or Compose a message

For a new message (compose button), we let the user choose the recipients and
save it as is. The user can change the recipients with no restrictions. The
`discussion_id` is calculated by the backend each time the draft is saved. The
`parent_id` is `undefined` if it is a new draft (compose).

In case of a reply, the `parent_id` is set by the client. And the backend
accepts a `discussion_id` and `participants` but it will recalc the
`discussion_id` and the `participants` each time the reply is saved.

## Sync client messages

Some protocols can't fetched from the Internet (SMS for example). In order to
aggregate discussions with those protocols a synchronization mechanism is
available.

```
POST /batch/messages
Request:
Body:
Array of: Object:

```
