const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserProfile,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require("../middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword );


router.get("/logout", logout);

router.get("/me", isAuthenticatedUser, getUserProfile);


module.exports = router;