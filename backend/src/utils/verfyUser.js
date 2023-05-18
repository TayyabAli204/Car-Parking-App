const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  console.log(req.params, "verifyyyyyy");
  try {
    if (!req.params.token && !req.body.token ) {
      res.json({
        message: "Token is required",
      });
    }
    console.log(req.params.token);
    var decoded = await jwt.verify(req.params.token || req.body.token, 'Secret');
    console.log(decoded, "decoded");
    req.user=decoded;
    if (decoded) {
      next();
    } else {
      res.json({
        message: "you don't access rights to call the route",
      });
    }
  } catch (error) {
    res.json({
      message: "you don't access rights to call the route",
      error,
    });
  }
};

module.exports = verifyUser;
