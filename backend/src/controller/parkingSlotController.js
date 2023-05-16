const { CarParking } = require("../models/parkingModel");
const { connection } = require("../config/dbConfig");
const { ObjectId } = require("mongodb");
const parkingSlotData = async (req, res) => {
  console.log(req.params.id);
  const data = await CarParking.find({ location: req.params.id });
  // const data = await model(req.params.id, {});
  // res.end('dfas')
  console.log(data, "data form db");
  res.json({
    message: "request success",
    data,
  });
};
const bookParkingSlot = async (req, res) => {
  console.log(req.body, "data form body");
  // const { _id, ...updateData } = req.body;
  // const CarParking=await  data.db('CarParking').collection(req.body.selectedArea).find().toArray()
  const updatedData = await CarParking.updateOne(
    { _id: new ObjectId(_id) },
    { $set: updateData }
    // { new: true }
  );
  console.log("CarParking", updatedData);

  res.end("ok");
};
module.exports = { parkingSlotData, bookParkingSlot };
