const bcrypt = require("bcrypt");

const verifyPassword = async (unhashed, hashed) => {
  try {
    const isMatch = await bcrypt.compare(unhashed, hashed);
    return isMatch;
  } catch (err) {
    console.error("Bcrypt comparison error:", err);
    return false;
  }
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    // Generates a salt and hashes the password in one step
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (err) {
    console.error("Error hashing password:", err);
    throw new Error("Hashing failed");
  }
};

module.exports = { verifyPassword, hashPassword };