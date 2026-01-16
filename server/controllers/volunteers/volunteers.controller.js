const { eq } = require("drizzle-orm");
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

const approveVolunteer = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Volunteer ID is required" });
  }

  try {
    const result = await db
      .update(volunteersTable)
      .set({ status: "approved" })
      .where(eq(volunteersTable.id, id));

    if (result.length === 0) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    res.status(200).json({ message: "Volunteer approved successfully" });
  } catch (error) {
    console.error("Error approving volunteer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const rejectVolunteer = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Volunteer ID is required" });
  }

  try {
    const result = await db
      .update(volunteersTable)
      .set({ status: "rejected" })
      .where(eq(volunteersTable.id, id));

    if (result.length === 0) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    res.status(200).json({ message: "Volunteer rejected successfully" });
  } catch (error) {
    console.error("Error rejecting volunteer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteVolunteer = async (req, res) => {
  const { id } = req.params;
  if(!id){
    return res.status(400).json({ error: "Volunteer ID is required" });
  }

  try {
    const result = await db
      .delete(volunteersTable)
      .where(eq(volunteersTable.id, id));
    if (result.length === 0) {  
      return res.status(404).json({ error: "Volunteer not found" });
    }

    return res.status(200).json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    console.error("Error deleting volunteer:", error);
    res.status(500).json({ error: "Internal server error" });
  }

}




module.exports = {
  createVolunteer,
  getVolunteers,
  approveVolunteer,
  deleteVolunteer,
  rejectVolunteer,
};
