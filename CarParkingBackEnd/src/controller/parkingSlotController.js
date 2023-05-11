const { CarParking } = require("../models/parkingModel")

 const parkingSlotData=async(req,res)=>{
    const data=await CarParking.find()
    // req.json({
    //     massage:"data chal gaya"
    // })
    // // console.log(data)
    // res.end('dhello')
    res.json({
        massage:"data chal gaya",
        data
    })

}
module.exports= parkingSlotData