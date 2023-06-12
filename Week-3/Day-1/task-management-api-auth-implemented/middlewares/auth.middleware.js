const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  // Get auth header value
  const token = req.headers["authorization"];

  try {
    // Check if token is undefined
    if (!token) {
      // This will go to the catch block
      throw "No token provided";
    }

    // Verify & decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // Set the user in the request object
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ error: error });
  }

  // If everything is good, then proceed to the next middleware (if any)
  return next();
}

function checkRole(roles) {
  return (req, res, next) => {
    // Roles is an array. For example, ['admin', 'manager']
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    return next();
  };
}

module.exports = {
  verifyToken,
  checkRole,
};
