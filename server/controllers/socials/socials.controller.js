const db = require("../../db/db");
const { socialsTable } = require("../../modals/schema");


const getSocials = async (req, res) => {
  try {
    const socials = await db.select().from(socialsTable);
    res.status(200).json(socials[0]);
  } catch (error) {
    console.error("error fetching socials :  ", error);
    res.status(500).json({ error: "Failed to fetch socials" });
  }
};

const addSocials = async (req, res) => {
  const { facebook, twitter, instagram } = req.body;

  if (!facebook || !twitter || !instagram) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await db.delete(socialsTable);
    await db.insert(socialsTable).values({
      facebook, twitter, instagram
    });
    res.status(201).json({ facebook, twitter, instagram });
  } catch (error) {
    console.error("error adding socials :  ", error);
    res.status(500).json({ error: "Failed to add socials" });
  }
};

module.exports = {
  getSocials,
  addSocials,
};