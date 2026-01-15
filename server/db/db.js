require ('dotenv/config')
const mysql = require('mysql2/promise')
const { drizzle }= require ('drizzle-orm/mysql2')

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

const db = drizzle(pool);

module.exports = db;