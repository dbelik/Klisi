const express = require("express");
const passport = require("passport");

const logger = require("../utilities/logger");

const router = express.Router();
router.get("/test", (req, res) => {
    res.send("You are qualified")
});

module.exports = router;