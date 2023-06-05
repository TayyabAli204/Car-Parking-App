const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const sendEmail = require("../utils/sendEmail");
const usersCollection = require("../models/userModel");
const { tokenCollection } = require("../models/emailModel");
const { emailCollection } = require("../models/emailModel");

const doSignUp = async (req, res) => {
  try {
  
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
  
    const token = await jwt.sign(
      {
        email: req.body.email,
      },
      "Secret"
    );
    const user = new usersCollection({
      email: req.body.email,
      passwordHash: passwordHash,
    });

    const result = await user.save();
   
console.log(token)
    // posts = [...posts, { ...req.body }]
    res.status(200).json({
      message: "user is sucessfully resgistered!",
      data: {
        email: req.body.email,
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

const doLogin = async (req, res) => {
  try {
    const userData = await usersCollection.findOne({
      email: req.body.email,
    });
    console.log(req.body, userData);
    if (!userData.email) {
      res.status(501).json({
        message: "email is not found",
        data: [],
      });
    }
    console.log(userData.passwordHash, req.body.password);
    const passwordDecode = await bcrypt.compare(
      req.body.password,
      userData.passwordHash
    );
    if (!passwordDecode) {
      res.status(502).json({
        message: "wrong password",
      });
    }

    const token = await jwt.sign(
      {
        email: userData.email,
      },
      "Secret"
    );
    res.status(200).json({
      message: "user is sucessfully resgistered!",
      data: {
        email: req.body.email,
        token: token,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(600).json({
      message: "failed",
      error: error,
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
    const useremail=req.body.email
    console.log(useremail,'email')
    const existingUser = await usersCollection.findOne({email:useremail});
    console.log(existingUser,'user already exit');
    if (existingUser) {
       resp.json({ error: 'Email already exists' });
       return
    }
    const token = generateToken();
    const email = await sendEmail(req.body.email, token.toString());

    // If the email doesn't exist, proceed with sending the verification code
    // ... code to send the verification code

    // Save the new user with the email address
    // const newUser = new usersCollection({ email });
    // await newUser.save();
    resp.status(200).json({
      message: "Verification code sent successfully ",
      data: {
        email: req.body.email,
        token: token,
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
    console.log("posts", posts[0]._doc);
    console.log(req.body);
    if (posts[0]._doc.text === req.body.token) {
      resp.status(200).json({
        massage: "OK",
      });
    } else {
      resp.json({
        massage: "worng OTP",
        data: [],
      });
    }
  } catch (error) {
    console.log("error", error);
  }
};

const doSendPassword = async (res, resp) => {
  try {
    const userPassword = await emailCollection.updateOne(
      { email: res.body.email },
      { $set: { password: res.body.password } }
    );
    console.log("res.body.password", res.body.password),
      console.log("res.body.pas", res.body.password),
      console.log("userPassword", userPassword);
    console.log("res.body", res.body);
    resp.status(200).json({
      massage: "password are add to emailCollection",
    });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  doSignUp,
  doLogin,
  doSendEmail,
  doFindToken,
  doSendPassword,
};
