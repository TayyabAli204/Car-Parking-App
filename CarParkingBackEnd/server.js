const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const emailCollection = require("./src/models/emailModel");
const db = require("./src/config/dbConfig");
const postRoutes = require("./src/routes/postRoutes");
const userRoutes = require("./src/routes/userRoutes");

db.connection();

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/post", (req, resp) => {
  console.log("request chali");
  resp.status(200).send("sucess");
});

// app.post('/sendPassword',(req,resp)=>{
//    console.log(req.body)
//   resp.status(200).json({
//     massage: "password generate"
//   })

// })

// const kittySchema = new mongoose.Schema({
//   email: String,
//   // {
//   //   validate:(email)=>true
//   // },
//   text: String,
// });
// const token = mongoose.model("emailverfications", kittySchema);
// console.log("token",token)
// app.post("/sendToken", async (req, resp) => {
//   try {
//     const posts = await token.find({ email: req.body.email });
//     console.log("posts", posts);
//     if(posts.length){
//       resp.status(200).json({
//         massage: "user exist",
//         data: {
//           email: req.body.email,
//           text: req.body.text,  
//         },
//       });
//     }
    
//     else{
//       resp.status(500).json({
//         massage: "user do not  exist",
//         // error:error,
//         data: [],
//       });
//     }
//     }
//    catch (error) {
//     console.log("error",error)
   
//   }
// });

app.use("/post", postRoutes);
app.use("/auth", userRoutes);

// http://localhost:8000/post/createPost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require("express");
// const app = express()
// var cors = require('cors')
// const port = 8000
// const bodyParser = require('body-parser')
// app.use(express.json())
// require('dotenv').config()
// app.use(cors())
// const db = require("./src/config/dbConnection")
// db.connection()
// const postRoutes = require("./src/routes/postRoutes")
// // const userRoutes = require("./src/routes/userRoutes")

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(express.static('public'))

// app.use('/post',postRoutes)
// // app.use('/auth',userRoutes)
// // app.get('/postrequest', async(req, res) => {
// //     try{
// //         console.log('request chali');
// //         res.status(200).send("success")
// //     }catch(error){
// //         console.log(error,'error in dfd')
// //     }
// //     });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
