const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const emailCollection = require("./src/models/emailModel");
const db = require("./src/config/dbConfig");
const postRoutes = require("./src/routes/postRoutes");
const userRoutes = require("./src/routes/userRoutes");
const {storingData}=require('./src/models/parkingModel')
const parkingSlotRoute=require('./src/routes/parkingSlotRoutes')
db.connection('Connect');

const app = express();
const port = 8000;
app.get('/data',storingData)
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/body", (req, resp) => {
  console.log("request chali",req.body);
  resp.status(200).send("sucess");
});


app.use("/post", postRoutes);
app.use("/auth", userRoutes);
app.use("/parkingSlot", parkingSlotRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

  