const mongoose = require('mongoose');

 async function connection() {
    try {
      console.log("process.env.DB_URI",process.env.DB_URI)
     const connection =  await mongoose.connect(process.env.DB_URI);
       console.log("connection successful",connection);
    } catch (error) {
      console.log(
        "connection error", error
      );
    }
  
  }

//   module.export = dbConnection

  module.exports = {
    connection
  }

 