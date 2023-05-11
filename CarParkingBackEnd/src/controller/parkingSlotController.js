const { CarParking } = require("../models/parkingModel")
  const parkingSlotData=async(req,res)=>{
    const data=await CarParking.find()
    console.log(data)
    // res.end('dfas')
    res.json({
        massage:"data chal gaya",
        data
    })

}
  const bookParkingSlot=async(req,res)=>{
    console.log(req.body._id)
  const updatedCarParking = await CarParking.findOneAndUpdate(
    { _id: req.body._id},
    { $set: req.body },
    { new: true }
  );
res.json(updatedCarParking)




}
module.exports={parkingSlotData,bookParkingSlot}