const express = require("express");
const router = express.Router();

const {
  processPayment,
  sendStripApi,
} = require("../controllers/paymentController");

const { isAuthenticatedUser } = require("../middlewares/authMiddleware");

router.post("/payment/process", isAuthenticatedUser, processPayment);
router.get("/stripeapi", isAuthenticatedUser, sendStripApi);

module.exports = router;
