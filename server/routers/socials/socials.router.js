const {
  getSocials,
  addSocials,
} = require("../../controllers/socials/socials.controller");
const express = require("express");

const socialsRouter = express.Router();

socialsRouter.get("/", getSocials);
socialsRouter.post("/", addSocials);


module.exports = socialsRouter;