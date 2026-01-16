const express = require("express");
const { createVolunteer,getVolunteers ,approveVolunteer,rejectVolunteer,deleteVolunteer } = require("../../controllers/volunteers/volunteers.controller");

const volunteersRouter = express.Router();

volunteersRouter.get("/", getVolunteers);

volunteersRouter.post("/", createVolunteer)


volunteersRouter.patch("/approve/:id", approveVolunteer);

volunteersRouter.patch("/reject/:id", rejectVolunteer);

volunteersRouter.delete("/delete/:id", deleteVolunteer);

module.exports = volunteersRouter   