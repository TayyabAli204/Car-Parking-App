const express = require("express");
const routes = express.Router();
const verifyUser = require("../utils/verfyUser");

const {
  parkingSlotData,
  bookParkingSlot,
  userHistory
} = require("../controller/parkingSlotController");
routes.get('/:token',verifyUser,userHistory)
routes.get("/data/:id/:token", verifyUser, parkingSlotData);
routes.post("/book", verifyUser, bookParkingSlot);

module.exports = routes;
