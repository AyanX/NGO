const express =require("express")

const getDashboardData = require("../../controllers/dashboard/dashboard.controller");

const dashboardRouter = express.Router();

dashboardRouter.get("/", getDashboardData);

module.exports = dashboardRouter;