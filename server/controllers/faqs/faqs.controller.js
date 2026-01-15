const db = require("../../db/db");
const { faqsTable } = require("../../modals/schema");

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await db.select().from(faqsTable);
    res.status(200).json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
};

const createFaq = async (req, res) => {
  const { question, answer, status, category } = req.body;
  if (!question || !answer || !status || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await db.insert(faqsTable).values({
      question,
      answer,
      status,
      category,
    });
    res.status(201).json({ message: "FAQ created successfully" });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ error: "Failed to create FAQ" });
  }
};
module.exports = {
  getAllFaqs,
  createFaq,
};