// Packages
const jwt = require("jsonwebtoken");

// Environmental Variables
const secrets = require("../config/secrets.js");

module.exports = {
  generateToken,
  restricted
};

// ============= Token
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  secret = secrets.jwtSecret;

  const options = {
    expiresIn: "200h"
  };

  return jwt.sign(payload, secret, options);
}

// ============= Middleware
function restricted(req, res, next) {
  const token = req.headers.authorization; // paste token on authorization header prop from register/login success

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      res
        .status(401)
        .json({ error: "Bad token. Make sure token is on header." });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
}
