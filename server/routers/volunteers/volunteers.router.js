const express = require("express");
const { createVolunteer,getVolunteers } = require("../../controllers/volunteers/volunteers.controller");

const volunteersRouter = express.Router();

volunteersRouter.get("/", getVolunteers);

volunteersRouter.post("/", createVolunteer)

module.exports = volunteersRouter   