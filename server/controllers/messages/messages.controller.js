const { eq } = require("drizzle-orm");
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

const markMessageAsReadorUnread = async (req, res) => {
  const { id } = req.params;  

  if(!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid message ID" });
  }

 const isMessageRead = await db.select().from(messagesTable).where(eq(messagesTable.id, Number(id)));

 const isRead = isMessageRead[0].read;


  try {
    const result = await db
      .update(messagesTable)
      .set({ read: !isRead })
      .where(eq(messagesTable.id, Number(id)));

    if (result.length === 0) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ message: "Message marked as read successfully" });
  } catch (error) {
    console.error("Error marking message as read:", error);
    res.status(500).json({ error: "Failed to mark message as read" });
  }
};


const deleteOneMessage = async (req, res) => {
  const { id } = req.params;
  if(!id){
    return res.status(400).json({ error: "Message ID is required" });
  }
  try {
    const result = await db
      .delete(messagesTable)
      .where(eq(messagesTable.id, Number(id)));

    if (result.length === 0) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Failed to delete message" });
  }
};

module.exports = {
  getAllMessages,
  createMessage,
  markMessageAsReadorUnread,
  deleteOneMessage,
};