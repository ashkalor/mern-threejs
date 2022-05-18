const asyncHandler = require("express-async-handler");

// @desc    Register a user
// @access  Private
// @route   POST /api/register
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

// @desc    Login user
// @access  Private
// @route   POST /api/login
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login User" });
});

module.exports = {
  registerUser,
  loginUser,
};
