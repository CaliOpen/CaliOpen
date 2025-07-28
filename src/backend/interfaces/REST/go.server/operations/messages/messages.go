// Copyleft (ɔ) 2017 The Caliopen contributors.
// Use of this source code is governed by a GNU AFFERO GENERAL PUBLIC
// license (AGPL) that can be found in the LICENSE file.

package messages

import (
	"bytes"
	. "github.com/CaliOpen/Caliopen/src/backend/defs/go-objects"
	"github.com/CaliOpen/Caliopen/src/backend/interfaces/REST/go.server/middlewares"
	"github.com/CaliOpen/Caliopen/src/backend/interfaces/REST/go.server/operations"
	"github.com/CaliOpen/Caliopen/src/backend/main/go.main"
	"github.com/CaliOpen/Caliopen/src/backend/main/go.main/pi"
	"github.com/gin-gonic/gin"
	swgErr "github.com/go-openapi/errors"
	"github.com/satori/go.uuid"
	"net/http"
	"strconv"
	"encoding/json"
)

// GET …/messages
func GetMessagesList(ctx *gin.Context) {
	// temporary hack to check if X-Caliopen-IL header is in request, because go-openapi pkg fails to do it.
	// (NB : CanonicalHeaderKey func normalize http headers with uppercase at beginning of words)
	if _, ok := ctx.Request.Header["X-Caliopen-Il"]; !ok {
		e := swgErr.New(http.StatusFailedDependency, "Missing mandatory header 'X-Caliopen-Il'.")
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}

	var limit, offset int
	var user_UUID UUID

	user_uuid_str := ctx.MustGet("user_id").(string)
	shard_id := ctx.MustGet("shard_id").(string)
	user_uuid, _ := uuid.FromString(user_uuid_str)
	user_UUID.UnmarshalBinary(user_uuid.Bytes())

	query_values := ctx.Request.URL.Query()
	if l, ok := query_values["limit"]; ok {
		limit, _ = strconv.Atoi(l[0])
		query_values.Del("limit")
	}
	if o, ok := query_values["offset"]; ok {
		offset, _ = strconv.Atoi(o[0])
		query_values.Del("offset")
	}

	// check for params to retrieve a range of messages 'around' a specific one
	// params `msg_id` and `range[]` must be both present
	var msgID string
	var msgRange []string
	if id, ok := query_values["msg_id"]; ok {
		msgID = id[0]
	}
	msgRange = query_values["range[]"]
	if msgID != "" && len(msgRange) == 0 {
		e := swgErr.New(http.StatusBadRequest, "range[] param must be provided with msg_id param")
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}
	if msgID == "" && len(msgRange) != 0 {
		e := swgErr.New(http.StatusBadRequest, "msg_id param must be provided with range[] param")
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}

	filter := IndexSearch{
		Shard_id: shard_id,
		User_id:  user_UUID,
		Terms:    map[string][]string(query_values),
		Limit:    limit,
		Offset:   offset,
		ILrange:  operations.GetImportanceLevel(ctx),
	}

	var list []*Message
	var totalFound int64
	var err error
	if msgID != "" && len(msgRange) != 0 {
		list, totalFound, err = caliopen.Facilities.RESTfacility.GetMessagesRange(filter)
	} else {
		list, totalFound, err = caliopen.Facilities.RESTfacility.GetMessagesList(filter)
	}
	if err != nil && err.Error() != "not found" {
		e := swgErr.New(http.StatusFailedDependency, err.Error())
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}
	settings, err := caliopen.Facilities.RESTfacility.GetSettings(user_uuid_str)
	if err != nil {
		e := swgErr.New(http.StatusFailedDependency, err.Error())
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}
	var respBuf bytes.Buffer
	respBuf.WriteString("{\"total\": " + strconv.FormatInt(totalFound, 10) + ",")
	respBuf.WriteString("\"messages\":[")
	first := true
	for _, msg := range list {
		msg.PI = pi.ComputePIMessage(msg)
		json_msg, err := msg.MarshalFrontEnd(settings.MessageDisplayFormat)
		if err == nil {
			if first {
				first = false
			} else {
				respBuf.WriteByte(',')
			}
			respBuf.Write(json_msg)
		}
	}
	respBuf.WriteString("]}")
	ctx.Data(http.StatusOK, "application/json; charset=utf-8", respBuf.Bytes())
}

// GET …/messages/:message_id
func GetMessage(ctx *gin.Context) {
	user_id := ctx.MustGet("user_id").(string)
	shard_id := ctx.MustGet("shard_id").(string)
	user_info := &UserInfo{User_id: user_id, Shard_id: shard_id}
	msg_id, err := operations.NormalizeUUIDstring(ctx.Param("message_id"))
	if err != nil {
		e := swgErr.New(http.StatusUnprocessableEntity, err.Error())
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}
	msg, err := caliopen.Facilities.RESTfacility.GetMessage(user_info, msg_id)
	if err != nil {
		e := swgErr.New(http.StatusFailedDependency, err.Error())
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}
	settings, err := caliopen.Facilities.RESTfacility.GetSettings(user_id)
	if err != nil {
		e := swgErr.New(http.StatusFailedDependency, err.Error())
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
		return
	}
	msg.PI = pi.ComputePIMessage(msg)
	msg_json, err := msg.MarshalFrontEnd(settings.MessageDisplayFormat)
	if err != nil {
		e := swgErr.New(http.StatusFailedDependency, err.Error())
		http_middleware.ServeError(ctx.Writer, ctx.Request, e)
		ctx.Abort()
	} else {
		ctx.Data(http.StatusOK, "application/json; charset=utf-8", msg_json)
	}
}

// POST /batch/messages
func PostBatch(ctx *gin.Context) {
	// user_id := ctx.MustGet("user_id").(string)
	// shard_id := ctx.MustGet("shard_id").(string)
	// user_info := &UserInfo{User_id: user_id, Shard_id: shard_id}

	data := map[string]string{"message": "OK"}
	msg_json, _ := json.Marshal(data)

	ctx.Data(http.StatusOK, "application/json; charset=utf-8", msg_json)
}
