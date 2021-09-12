const express = require("express");
const controller = require("../controllers/resourceController");

const router = express.Router();

router.get("/", controller.getFile);
router.post("/", controller.uploadFile);
router.delete("/:id", controller.deleteFile);

module.exports = router;
