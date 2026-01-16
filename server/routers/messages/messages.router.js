const express = require("express");
const {
  getAllMessages,
  createMessage,
  markMessageAsReadorUnread,
  deleteOneMessage
} = require("../../controllers/messages/messages.controller");

const messagesRouter = express.Router();

messagesRouter.get("/", getAllMessages);

messagesRouter.post("/", createMessage);

messagesRouter.patch("/read/:id", markMessageAsReadorUnread);

messagesRouter.delete("/delete/:id", deleteOneMessage);


module.exports = messagesRouter;
