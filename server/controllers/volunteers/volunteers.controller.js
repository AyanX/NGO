const db = require("../../db/db");
const { volunteersTable } = require("../../modals/schema");

const createVolunteer = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.location ||
    !req.body.age ||
    !req.body.category ||
    !req.body.availability ||
    !req.body.motivation
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    await db.insert(volunteersTable).values({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      age: req.body.age,
      category: req.body.category,
      availability: req.body.availability,
      motivation: req.body.motivation,
      languages: req.body.languages,
      confirmAccuracy: true,
      agreeConduct: true,
    });
    res
      .status(201)
      .json({ message: "Volunteer application created successfully" });
  } catch (error) {
    console.error("Error creating volunteer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getVolunteers = async (req, res) => {
  try {
    const volunteers = await db.select().from(volunteersTable);
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createVolunteer,
  getVolunteers,
};
