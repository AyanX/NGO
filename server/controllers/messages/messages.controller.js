const db = require("../../db/db");
const { messagesTable } = require("../../modals/schema");

const getAllMessages = async (req, res) => {
  try {
    const messages = await db.select().from(messagesTable);
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const createMessage = async (req, res) => {
  const { name, email, message, subject } = req.body;
  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await db.insert(messagesTable).values({
      name,
      email,
      message,
      subject,
    });
    res.status(201).json({ message: "Message created successfully" });
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({ error: "Failed to create message" });
  }
};


module.exports = {
  getAllMessages,
  createMessage,
};