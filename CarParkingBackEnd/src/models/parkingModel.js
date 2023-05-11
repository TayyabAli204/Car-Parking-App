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
  BookedTime:Date,
});

const CarParking = mongoose.model("CarParkingData", carParkingSchema);

// // Insert the initial data into the database
async function storingData(req,res,next) {
//   const data = await CarParking.insertMany(initialData);
//   console.log(data);
  res.end('done')
}

module.exports = {
  storingData,
  CarParking
};
