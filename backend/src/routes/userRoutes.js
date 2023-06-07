const express = require("express");
const routes = express.Router();
const {
  doLogin,
  doSignUp,
  doSendEmail,
  doFindToken,
  doSendPassword,
  updateProfile,
  newPassword
} = require("../controller/userController");

routes.post("/login", doLogin);
routes.post("/signup", doSignUp);
routes.post("/sendemail", doSendEmail);
routes.post("/sendtoken", doFindToken);
routes.post("/sendpassword", doSendPassword);
routes.post("/updateProfile", updateProfile);
routes.post("/newPassword", newPassword);



module.exports = routes;
