// Copyleft (ɔ) 2017 The Caliopen contributors.
// Use of this source code is governed by a GNU AFFERO GENERAL PUBLIC
// license (AGPL) that can be found in the LICENSE file.

package REST

import (
	"errors"
	"fmt"
	. "github.com/CaliOpen/Caliopen/src/backend/defs/go-objects"
	"github.com/satori/go.uuid"
	"io"
)

func (rest *RESTfacility) AddAttachment(user_id, message_id, filename, content_type string, file io.Reader) (attachmentPath string, err error) {
	//check if message_id belongs to user and is a draft
	msg, err := rest.store.GetMessage(user_id, message_id)
	if err != nil {
		return "", err
	}
	if !msg.Is_draft {
		return "", errors.New("message " + message_id + " is not a draft.")
	}

	//store temporary file in objectStore facility
	tmpAttachmentID := uuid.NewV4()
	uri, size, err := rest.store.StoreAttachment(tmpAttachmentID.String(), file)
	if err != nil {
		return "", err
	}

	//update draft with new attachment references
	draftAttchmnt := Attachment{
		Content_type: content_type,
		File_name:    filename,
		Is_inline:    false,
		Size:         size,
		URI:          uri,
	}
	attchmntIndex := len(msg.Attachments)
	msg.Attachments = append(msg.Attachments, draftAttchmnt)
	//update store
	fields := make(map[string]interface{})
	fields["attachments"] = msg.Attachments
	err = rest.store.UpdateMessage(msg, fields)
	if err != nil {
		//roll-back attachment storage before returning the error
		rest.store.DeleteAttachment(uri)
		return "", err
	}
	//update index
	err = rest.index.UpdateMessage(msg, fields)
	if err != nil {
		//roll-back attachment storage before returning the error
		fields["attachments"] = msg.Attachments[:attchmntIndex]
		rest.store.UpdateMessage(msg, fields)
		rest.store.DeleteAttachment(uri)
		return "", err
	}

	attachmentPath = fmt.Sprintf("%s/attachments/%d", message_id, attchmntIndex)
	return
}

func (rest *RESTfacility) DeleteAttachment(user_id, message_id string, attchmtIndex int) error {
	//check if message_id belongs to user and is a draft and index is consistent
	msg, err := rest.store.GetMessage(user_id, message_id)
	if err != nil {
		return err
	}

	if !msg.Is_draft {
		return errors.New("message " + message_id + " is not a draft.")
	}
	if attchmtIndex < 0 || attchmtIndex > (len(msg.Attachments)-1) {
		return errors.New(fmt.Sprintf("index %d for message %s is not consistent.", attchmtIndex, message_id))
	}

	//remove attachment's reference from draft
	attachment_uri := msg.Attachments[attchmtIndex].URI
	msg.Attachments = append(msg.Attachments[:attchmtIndex], msg.Attachments[attchmtIndex+1:]...)

	//update store
	fields := make(map[string]interface{})
	fields["attachments"] = msg.Attachments
	rest.store.UpdateMessage(msg, fields)
	if err != nil {
		return err
	}
	//update index
	err = rest.index.UpdateMessage(msg, fields)

	//remove temporary file from object store
	err = rest.store.DeleteAttachment(attachment_uri)
	if err != nil {
		return errors.New(fmt.Sprintf("failed to remove temp attachment at uri '%s' with error <%s>", attachment_uri, err.Error()))
	}

	return nil
}

func (rest *RESTfacility) OpenAttachment(user_id, message_id string, attchmtIndex int) (contentType string, content io.ReadSeeker, err error) {
	//check if message_id belongs to user and index is consistent
	msg, err := rest.store.GetMessage(user_id, message_id)
	if err != nil {
		return "", nil, err
	}
	if attchmtIndex < 0 || attchmtIndex > (len(msg.Attachments)-1) {
		return "", nil, errors.New(fmt.Sprintf("index %d for message %s is not consistent.", attchmtIndex, message_id))
	}
	contentType = msg.Attachments[attchmtIndex].Content_type

	// create a ReadSeeker
	// either from object store (draft context)
	// or from raw message's mime part (non-draft context)
	/*
	if msg.Is_draft {
		attachment, err := rest.store.GetAttachment(msg.Attachments[attchmtIndex].URI)
		if err != nil {
			return "", nil, err
		}
		io.NewSectionReader(attachment, 0, int64(msg.Attachments[attchmtIndex].Size))

	} else {
		rawMsg, err := rest.store.GetRawMessage(user_id, message_id)
		if err != nil {
			return "", nil, err
		}
	}
	*/
	return
}
