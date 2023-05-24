const express = require("express");
const routes = express.Router();
const verifyUser = require("../utils/verfyUser");

const {
  parkingSlotData,
  bookParkingSlot,getBookedSlots,
  userHistory,getParkingSlots
} = require("../controller/parkingSlotController");
routes.get('/:token',verifyUser,userHistory)
routes.get('/bookedSlots',getBookedSlots)
routes.get("/data/:id/:token", verifyUser, parkingSlotData);
routes.post("/book", verifyUser, bookParkingSlot);
routes.get('/',getParkingSlots)
module.exports = routes;
