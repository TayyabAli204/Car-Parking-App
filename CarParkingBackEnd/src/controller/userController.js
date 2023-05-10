const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const usersCollection = require("../models/userModel");
const {tokenCollection} = require("../models/emailModel")
const {emailCollection} = require("../models/emailModel")

const doSignUp = async (req, res) => {
  try {
    console.log("====================================");
    console.log(".req.body", req.body);
    console.log("====================================");

    // const salt = await bcrypt.genSalt(10);
    // const passwordHash = await bcrypt.hash(req.body.password, salt)
    console.log('===================="passwordHash================');
    // console.log(passwordHash, salt);
    console.log("====================================");
    const user = new usersCollection({
      email: req.body.email,
      passwordHash: req.body.passwordHash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const result = await user.save();
    console.log("result", result);

    // posts = [...posts, { ...req.body }]
    res.status(200).json({
      message: "user is sucessfully resgistered!",
      data: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
};

const doLogin = async (req, res) => {
  try {
    const userData = await usersCollection.findOne({
      email: req.body.email,
    });

    console.log("====================================");
    console.log(req.body, userData);
    console.log("====================================");

    // if (!userData.passwordHash) {
    //     res.status(500).json({
    //         message: 'email is not found',
    //         data: []
    //     })
    // }

    // const passwordDecode = await bcrypt.compare(req.body.password, userData.passwordHash)
    // if (!passwordDecode) {
    //     res.status(500).json({
    //         message: 'wrong password',
    //         data: []
    //     })
    // }

    const token = await jwt.sign(
      {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
      process.env.secretkey
    );

    console.log("====================================");
    console.log("token", token);
    console.log("====================================");

    res.status(200).json({
      message: "user is sucessfully resgistered!",
      data: {
        email: req.body.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        token,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
};

//  email wala routes
const generateToken = () => {
  const min = 1000;
  const max = 9999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const doSendEmail = async (req, resp) => {
  try {
    const token = generateToken();
    const email = await sendEmail(req.body.email, token.toString());
    resp.status(200).json({
      message: "Email has send sucessfully",
      data: {
        email: req.body.email,
      },
    });
  } catch (error) {
    console.log("error", error);
    resp.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
};
//  send token routes
const doFindToken = async (req, resp) => {
  try {
    const posts = await tokenCollection.find({ email: req.body.email });
    console.log("posts", posts[0]._doc)
    console.log(req.body)
    if(posts[0]._doc.text === req.body.token){
       resp.status(200).json({
        massage: "OK",
      });
    }
    else{
      resp.json({
        massage: "worng OTP",
        data: [],
      });
    }
    }
    catch (error) {
     console.log("error",error)
    
   }
 };

 const doSendPassword= async(res,resp)=>{
  try {
    const userPassword = await emailCollection.updateOne({email:res.body.email},{$set:{password:res.body.password}})
    console.log("res.body.password",res.body.password),
    console.log("res.body.pas",res.body.password),

    console.log("userPassword",userPassword)
    console.log("res.body",res.body)
    resp.status(200).json({
      massage:"password are add to emailCollection"
    })
  } catch (error) {
    console.log("error",error)
  }


 }

    

module.exports = {
  doSignUp,
  doLogin,
  doSendEmail,
  doFindToken,
  doSendPassword
};
