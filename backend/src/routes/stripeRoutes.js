const express = require("express");
const routes = express.Router();
const {getStripePayment} = require("../controller/stripeController")


routes.post('/',getStripePayment)


module.exports = routes;