const db = require("../db/db");
const { hashPassword } = require("../utils/bcrypt");
const { adminTable } = require("../modals/schema");

const resetController = async (req, res) => {
  console.log("PASSWORD RESET REQUEST");
  try {
    const { adminEmail, newPassword, confirmPassword } = req.body;
    if (!adminEmail || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const admin = await db.select().from(adminTable);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    await db.delete(adminTable);

    const hashedPassword = await hashPassword(newPassword);
    await db.insert(adminTable).values({
      email: adminEmail,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Password reset successfully" });
  } catch (error) {
    console.log("Error resetting password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const resetControllerGet = async (req, res) => {
  try {
    const admin = await db.select().from(adminTable);
    if (admin.length > 0) {
      return res.status(200).json(admin[0].email);
    }
    return res.status(500).json({ message: "Admin not found" });
  } catch (error) {
    console.log("Error fetching admin data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { resetController, resetControllerGet };