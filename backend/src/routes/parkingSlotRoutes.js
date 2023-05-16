const express = require("express");
const routes = express.Router();
const verifyUser = require("../utils/verfyUser");

const {
  parkingSlotData,
  bookParkingSlot,
} = require("../controller/parkingSlotController");

routes.get("/data/:id/:token", verifyUser, parkingSlotData);
routes.post("/book", verifyUser, bookParkingSlot);

module.exports = routes;
