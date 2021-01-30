const express = require("express");
const passport = require("passport");

const logger = require("../utilities/logger");

const router = express.Router();
router.get("/test", (req, res) => {
    logger.log("Hit testing route");
    res.json({
        name: 'test'
    });
});

module.exports = router;