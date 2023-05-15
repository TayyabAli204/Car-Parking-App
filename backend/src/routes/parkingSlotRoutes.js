
const express = require("express")
const routes = express.Router()

const {parkingSlotData,bookParkingSlot} = require('../controller/parkingSlotController')

routes.get('/data/:id', parkingSlotData)
routes.post('/book',bookParkingSlot)



module.exports = routes