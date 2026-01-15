const express = require('express');
const { getAllFaqs, createFaq } = require('../../controllers/faqs/faqs.controller');

const faqsRouter = express.Router();

faqsRouter.get('/', getAllFaqs);

faqsRouter.post('/', createFaq);

module.exports = faqsRouter;