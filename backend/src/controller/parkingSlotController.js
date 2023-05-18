const { CarParking } = require("../models/parkingModel");
const { connection } = require("../config/dbConfig");
const { ObjectId } = require("mongodb");
const parkingSlotData = async (req, res) => {
  console.log(req.params.id);
  const data = await CarParking.find({ location: req.params.id });

  res.json({
    message: "request success",
    data,
  });
};
const bookParkingSlot = async (req, res) => {
  const { _id,token, ...updateData } = req.body.data;
  updateData.userName=req.user.email
  const updatedData = await CarParking.updateOne(
    { _id: new ObjectId(_id) },
    { $set: updateData },
    { new: true }
  );
  // console.log("CarParking", updatedData);

  res.end("ok");
};
module.exports = { parkingSlotData, bookParkingSlot };
