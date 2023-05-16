const mongoose = require("mongoose");

async function connection() {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://tayyab:xeccef@cluster0.59kwykj.mongodb.net/CarParking"
    );
    console.log("connection successful");
  } catch (error) {
    console.log("connection error", error);
  }
}

// try {
// //  const connection =  await mongoose.connect(process.env.dbURI);
//  db =  await mongoose.connect("mongodb+srv://tayyab:xeccef@cluster0.59kwykj.mongodb.net/CarParking");
//    console.log("connection successful");

// } catch (error) {
//   console.log(
//     "connection error", error
//   );
// }
//  const data=await client.db('CarParking').collection('jaranwalaRoadFaisalabad').find().toArray()
//  console.log(data)

// mongo = client;

module.exports = {
  connection,
};
