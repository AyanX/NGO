const db = require("../../db/db");
const { contactsTable } = require("../../modals/schema");

const getContacts = async (req, res) => {
  try {
    const contacts = await db.select().from(contactsTable);
    res.status(200).json(contacts[0]);
  } catch (error) {
    console.error("error fetching contacts :  ", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

const addContact = async (req, res) => {
  const { location, email, phone } = req.body;

  if (!location || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await db.delete(contactsTable);
    await db.insert(contactsTable).values({
      location,
      email,
      phone,
    });
    res.status(201).json({ location, email, phone });
  } catch (error) {
    console.error("error adding contact :  ", error);
    res.status(500).json({ error: "Failed to add contact" });
  }
};

module.exports = {
  getContacts,
  addContact,
};