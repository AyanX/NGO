const express = require("express");
const {
  getAllFaqs,
  createFaq,
  unpublishFaq,
  updateFaq,
  deleteFaq,
} = require("../../controllers/faqs/faqs.controller");

const faqsRouter = express.Router();

faqsRouter.get("/", getAllFaqs);

faqsRouter.post("/", createFaq);

faqsRouter.patch("/update/:id", updateFaq);

faqsRouter.delete("/delete/:id", deleteFaq);

faqsRouter.patch("/unpublish/:id", unpublishFaq);
module.exports = faqsRouter;
