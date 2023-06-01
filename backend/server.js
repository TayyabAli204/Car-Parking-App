const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require('stripe')(process.env.Stripe_S_Key);
const cors = require("cors");
const mongoose = require("mongoose");
const emailCollection = require("./src/models/emailModel");
const db = require("./src/config/dbConfig");
const postRoutes = require("./src/routes/postRoutes");
const userRoutes = require("./src/routes/userRoutes");
const { storingData } = require("./src/models/parkingModel");
const parkingSlotRoute = require("./src/routes/parkingSlotRoutes");
const stripeRoutes = require('./src/routes/stripeRoutes')
db.connection();

const app = express();
const port = 8000;
app.get("/data", storingData);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/body", (req, resp) => {
console.log(req.query.Quiz.forEach(item=>console.log(item)))
  console.log("request chali", req.body);
  resp.status(200).json(req.query);
});

app.use("/post", postRoutes);
app.use("/auth", userRoutes);
app.use("/parkingSlot", parkingSlotRoute);
app.use("/payment-sheet",stripeRoutes)

// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.





// app.post('/payment-sheet', async (req, res) => {
  
//   // Use an existing Customer ID if this is a returning customer.
//   const {amount,currency} = req.body;
//   const customer = await stripe.customers.create();
//   const ephemeralKey = await stripe.ephemeralKeys.create(
//     {customer: customer.id},
//     {apiVersion: '2022-11-15'}
//   );
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency:currency,
//     customer: customer.id,
//     payment_method_types: ['card'],
//   });

//   res.json({
//     paymentIntent: paymentIntent.client_secret,
//     ephemeralKey: ephemeralKey.secret,
//     customer: customer.id,
//   });

  
// });











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
