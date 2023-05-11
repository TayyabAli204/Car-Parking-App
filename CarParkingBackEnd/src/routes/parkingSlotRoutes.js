
const express = require("express")
const routes = express.Router()

const sendParkingSlotData = require('../controller/parkingSlotController')

routes.get('/data', sendParkingSlotData)

// routes.delete('/deletePost',doDeletePost)

// routes.get('/getPosts', doGetPosts)

module.exports = routes