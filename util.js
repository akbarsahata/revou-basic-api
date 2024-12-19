const jwt = require("jsonwebtoken");

function generateJwt(data) {
  return jwt.sign(data, "secret", { expiresIn: "5m" });
}

function validateJwt(token) {
  try {
    return jwt.verify(token, "secret");
  } catch {
    return false;
  }
}

module.exports = {
  generateJwt,
  validateJwt,
};
