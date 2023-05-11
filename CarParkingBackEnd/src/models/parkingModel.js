const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const carParkingSchema = new Schema({
  parkingLotName: String,
  parkingSpaceNumber: Number,
  carLicensePlateNumber: String,
  entryTime: Date,
  exitTime: Date,
  totalParkingTime: Number,
  perHourFee: Number,
  BookedTime:Date,  booked:Boolean,
  RequestSpecialGuard:Boolean,
});
const initialData = [
  {

    parkingLotName: "Lot A",
    parkingSpaceNumber: 1,
    carLicensePlateNumber: "ABC-123",
    entryTime: null,
    exitTime: null, 

    BookedTime:null,
    RequestSpecialGuard:false,
    totalParkingTime: 0,  booked:false,
    perHourFee: 10,
  },
  {
    parkingLotName: "Lot B",
    parkingSpaceNumber: 2,

    entryTime: null,
    exitTime:null, BookedTime:null,
    totalParkingTime: 0,  booked:false,
      RequestSpecialGuard:false,
    perHourFee: 15,
  },
  {
    parkingLotName: "Lot C",
    parkingSpaceNumber: 3,
    carLicensePlateNumber: "ABC-123",
    entryTime: null,
    exitTime: null,
    BookedTime:null,  booked:false,
      RequestSpecialGuard:false,
    totalParkingTime: 4,
    perHourFee: 10,
  },
  {
    parkingLotName: "Lot D",
    parkingSpaceNumber: 4,

    entryTime: null,
    exitTime: null,
    BookedTime:null,  booked:false,
      RequestSpecialGuard:false,
    totalParkingTime: 0,
    perHourFee: 15,
  },
  {
    parkingLotName: "Lot E",
    parkingSpaceNumber: 5,

    entryTime: null,  booked:false,
    exitTime: null, BookedTime:null,
      RequestSpecialGuard:false,
    totalParkingTime: 0,
    perHourFee: 15,
  },
  {
    parkingLotName: "Lot F",
    parkingSpaceNumber: 6,

    entryTime: null,
      booked:false,
    exitTime: null, BookedTime:null,
      RequestSpecialGuard:false,
    totalParkingTime: 0,
    perHourFee: 15,
  },
  {
    parkingLotName: "Lot G",
    parkingSpaceNumber: 7,

    entryTime: null,
      booked:false,
    exitTime: null, BookedTime:null,
      RequestSpecialGuard:false,
    totalParkingTime: 0,
    perHourFee: 15,
  },
  {
    parkingLotName: "Lot H",
    parkingSpaceNumber: 8,
 booked:false,
    entryTime: null,
    exitTime: null, BookedTime:null,
      RequestSpecialGuard:false,
    totalParkingTime: 0,
    perHourFee: 15,
  },
]
const CarParking = mongoose.model("carParkingData", carParkingSchema);
// // Insert the initial data into the database
async function storingData(req,res,next) {
  const data = await CarParking.insertMany(initialData);
  console.log(data);
  res.end('done')
}

module.exports = {
  storingData,
  CarParking
};
