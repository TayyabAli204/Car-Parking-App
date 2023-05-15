const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

async function connection() {
  const client = await MongoClient.connect(
    "mongodb+srv://tayyab:xeccef@cluster0.59kwykj.mongodb.net/CarParking",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }
  );
  console.log("Db connected");
  return client;

  // const collection = db.collection('jaranwalaRoadFaisalabad');

  // collection.find({}).toArray((err, docs) => {
  //   if (err) {
  //     console.error('Failed to retrieve data from MongoDB:', err);
  //     return;
  //   }

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

  mongo = client;
}

module.exports = {
  connection,
};
