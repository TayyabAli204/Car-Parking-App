const express = require("express");
const routes = express.Router();
const { addParkingArea } = require("../controller/adminController");
routes.post("/addLocation", addParkingArea);
module.exports = routes;
