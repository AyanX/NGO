const express = require('express');
const { getContacts,addContact } = require('../../controllers/contacts/contacts.controller');

const contactsRouter = express.Router();

contactsRouter.get('/', getContacts);

contactsRouter.post('/', addContact);

module.exports = contactsRouter;