const express= require('express');
const { getAllMessages, createMessage } = require('../../controllers/messages/messages.controller');

const messagesRouter= express.Router();


messagesRouter.get('/', getAllMessages);

messagesRouter.post('/', createMessage);

module.exports= messagesRouter;