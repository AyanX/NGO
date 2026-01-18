const { eq, sql, desc } = require("drizzle-orm");
const db = require("../../db/db");
const { faqsTable } = require("../../modals/schema");

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await db.select().from(faqsTable).orderBy(desc(faqsTable.id));
    res.status(200).json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
};

const createFaq = async (req, res) => {
  console.log("Received FAQ creation request with body:", req.body);
  const { question, answer, category } = req.body;
  if (!question || !answer || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await db.insert(faqsTable).values({
      question,
      answer: answer.trim(),
      status: "published",
      category,
    });

    // Fetch the newly created FAQ using the inserted ID
    const [createdFaq] = await db
      .select()
      .from(faqsTable)
      .where(eq(faqsTable.id, sql`LAST_INSERT_ID()`));

    res.status(201).json({
      message: "FAQ created successfully",
      data: createdFaq,
    });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ error: "Failed to create FAQ" });
  }
};

const updateFaq = async (req, res) => {
  console.log("Received FAQ update request with body:", req.body);
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "FAQ ID is required" });
  }

  const { question, answer, category } = req.body;
  if (!question || !answer || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  //update FAQ in database
  try {
    const updatedCount = await db
      .update(faqsTable)
      .set({
        question,
        answer: answer.trim(),
        category,
      })
      .where(eq(faqsTable.id, id));

    if (updatedCount === 0) {
      return res.status(404).json({ error: "FAQ not found" });
    }

    // Fetch the updated FAQ
    const [updatedFaq] = await db
      .select()
      .from(faqsTable)
      .where(eq(faqsTable.id, id));

    res.status(200).json({
      message: "FAQ updated successfully",
      data: updatedFaq,
    });
  } catch (error) {}
};

const deleteFaq = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "FAQ ID is required" });
  }
  try {
    const deletedCount = await db.delete(faqsTable).where(eq(faqsTable.id, id));
    if (deletedCount === 0) {
      return res.status(404).json({ error: "FAQ not found" });
    }
    res.status(200).json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ error: "Failed to delete FAQ" });
  }
};

const unpublishFaq = async (req, res) => {
  console.log("unpublish faq called");
  const { id } = req.params;
  if (!id ) {
    return res.status(400).json({ message: "FAQ ID is required" });
  }

  //change status to "draft"
  try {
      await db
      .update(faqsTable)
      .set({
        status: sql`
      CASE
        WHEN ${faqsTable.status} = 'published' THEN 'draft'
        ELSE 'published'
      END
    `,
      })
      .where(eq(faqsTable.id, id));

    const updatedFaq = await db
      .select()
      .from(faqsTable)
      .where(eq(faqsTable.id, id));

      if(!updatedFaq[0]){
        return res.status(404).json({ message: "FAQ not found after update" });
      }

    res.status(200).json({ message: "FAQ unpublished successfully", data: updatedFaq[0] });
  } catch (error) {
    console.error("Error unpublishing FAQ:", error);
    res.status(500).json({ error: "Failed to unpublish FAQ" });
  }
};

module.exports = {
  getAllFaqs,
  updateFaq,
  deleteFaq,
  unpublishFaq,
  createFaq,
};
