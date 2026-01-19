const { adminTable } = require("../modals/schema.js");
const db = require("../db/db.js");
const NODE_ENV = process.env.NODE_ENV;
const { accessToken } = require("../utils/jwt.js");
const { verifyPassword } = require("../utils/bcrypt.js");
const { eq } = require("drizzle-orm");

const adminLoginHandler = async (req, res) => {
  console.log("Login attempt received", req.body);
  try {
    const { email: username, password } = req.body;
    const foundUser = await db
      .select()
      .from(adminTable)
      .where(eq(adminTable.email, username));
    if (!foundUser[0]) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    const isPasswordValid = await verifyPassword(
      password,
      foundUser[0]?.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("User authenticated", req.body);

    const token = await accessToken(username);
    res.cookie("access", token, {
      httpOnly: true,
      // Change secure to false for localhost
      secure: NODE_ENV === "development" ? false : true,
      maxAge: 60 * 60 * 1000,
      // Change 'none' to 'lax' for local development
      sameSite: NODE_ENV === "development" ? "lax" : "none",
      path: "/",
    });

    res.status(200).json({ message: "Login successful" });
  } catch (e) {
    console.log("authentication failed", e);
    res.status(403).json({ "server error": e });
  }
};

module.exports = adminLoginHandler;