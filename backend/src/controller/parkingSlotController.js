// const { CarParking } = require("../models/parkingModel")
const {connection}=require('../config/dbConfig')
const {ObjectId}=require('mongodb')
  const parkingSlotData=async(req,res)=>{
    console.log(req.params)
    const data=await connection()
   const slots= await data.db('CarParking').collection(req.params.id).find().toArray()
    // const data=await model(req.params.id,{})
    // res.end('dfas')
    res.json({
      data:slots
        // data
    })

}
  const bookParkingSlot=async(req,res)=>{
    console.log(req.body,'data form body')
    const { _id, ...updateData } = req.body; 
    const data=await connection()
    // const CarParking=await  data.db('CarParking').collection(req.body.selectedArea).find().toArray()
    const CarParking=await  data.db('CarParking').collection(req.body.selectedArea).updateOne(
      { _id: new ObjectId(_id)},
      { $set: updateData },
      { new: true }
    );
  console.log('CarParking',CarParking)
 
res.end("ok")





}
module.exports={parkingSlotData,bookParkingSlot}