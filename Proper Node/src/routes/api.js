const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')

// Define the public API endpoint
router.get("/endpoint", (req, res) => {
  res.json({ message: "This is a public API response" });
});

// function 
function decodeToken (token) {
  return jwt.decode(token)
}

// Define the authenticated API endpoint
router.get("/authenticated-endpoint", (req, res) => {
  try {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader) {
      let user_info = decodeToken(authHeader.split(" ")[1]);
      let user_id = user_info["sub"].replace("auth0|", ""); 
      console.log("user_id", user_id);
    } else {
      console.log("No Authorization header provided");
      return res
        .status(401)
        .json({ error: "No Authorization header provided" });
    }

    // The user information will be available in req.user if the JWT is valid
    res.json({
      message: "This is an authenticated API response",
      user: req.user,
    });
  } catch (error) {
    console.error("Error in authenticated-endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
