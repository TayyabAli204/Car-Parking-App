const mongoose = require('mongoose');

 async function connection() {
    try {
    //  const connection =  await mongoose.connect(process.env.dbURI);
     const connection =  await mongoose.connect("mongodb+srv://tayyab:xeccef@cluster0.59kwykj.mongodb.net/CarParking");
       console.log("connection successful");
    } catch (error) {
      console.log(
        "connection error", error
      );
    }
  
  }
  module.exports = {
    connection
  }

 