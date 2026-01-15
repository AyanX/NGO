require('dotenv/config');
const {defineConfig} = require('drizzle-kit');

const  config = defineConfig({
  out: './drizzle',
  schema: './modals/schema.js',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

module.exports = config;