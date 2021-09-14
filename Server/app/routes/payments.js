const express = require("express");
const path = require("path");
const router = express.Router();

const controller = require("../controllers/paymentController");

router.get("/checkout", controller.checkout);

router.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
});

router.get("/pending", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "pending.html"));
});

router.get("/failure", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "failure.html"));
});

module.exports = router;
