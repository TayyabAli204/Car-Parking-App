const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const carParkingSchema = new Schema({
  parkingLotName: String,
  userName: String,
  parkingSpaceNumber: Number,
  entryTime: String,
  exitTime: String,
  totalParkingTime: Number,
  perHourFee: Number,
  BookedTime: String,
  booked: Boolean,
  location: String,
});
const initialData = [
  {
    parkingLotName: "Lot A",
    userName: "",
    parkingSpaceNumber: 1,
    entryTime: null,
    exitTime: null,
    BookedTime: null,
    totalParkingTime: 0,
    booked: false,
    perHourFee: 10,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot B",
    userName: "",
    parkingSpaceNumber: 2,
    entryTime: null,
    exitTime: null,
    BookedTime: null,
    totalParkingTime: 0,
    booked: false,
    perHourFee: 15,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot C",
    userName: "",
    parkingSpaceNumber: 3,
    entryTime: null,
    exitTime: null,
    BookedTime: null,
    booked: false,
    totalParkingTime: 4,
    perHourFee: 10,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot D",
    userName: "",
    parkingSpaceNumber: 4,
    entryTime: null,
    exitTime: null,
    BookedTime: null,
    booked: false,
    totalParkingTime: 0,
    perHourFee: 15,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot E",
    parkingSpaceNumber: 5,
    userName: "",
    entryTime: null,
    booked: false,
    exitTime: null,
    BookedTime: null,
    totalParkingTime: 0,
    perHourFee: 15,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot F",
    parkingSpaceNumber: 6,
    userName: "",
    entryTime: null,
    booked: false,
    exitTime: null,
    BookedTime: null,
    totalParkingTime: 0,
    perHourFee: 15,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot G",
    parkingSpaceNumber: 7,
    userName: "",
    entryTime: null,
    booked: false,
    exitTime: null,
    BookedTime: null,
    totalParkingTime: 0,
    perHourFee: 15,
    location: "JARANWALA ROAD FAISALABAD",
  },
  {
    parkingLotName: "Lot H",
    userName: "",
    parkingSpaceNumber: 8,
    booked: false,
    entryTime: null,
    exitTime: null,
    BookedTime: null,
    totalParkingTime: 0,
    perHourFee: 15,
    location: "JARANWALA ROAD FAISALABAD",
  },
];
// async function storeData
const CarParking = mongoose.model("carParkingData", carParkingSchema);
// // Insert the initial data into the database
async function storingData(req, res, next) {
  const data = await CarParking.insertMany(initialData);
  console.log(data);
  res.end("done");
}

module.exports = {
  storingData,
  CarParking,
};
