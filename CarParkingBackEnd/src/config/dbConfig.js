const mongoose = require('mongoose');

 async function connection() {
    try {
     const connection =  await mongoose.connect(process.env.dbURI);
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

 