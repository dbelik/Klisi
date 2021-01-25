const express = require("express");
const passport = require("passport");
const { ExceptionHandler } = require("winston");

const logger = require("../utilities/logger");

const router = express.Router();
router.get("/login/google", passport.authenticate("google", {
    scope: ["profile"]
}));
router.get("/login/google/callback", passport.authenticate("google"), (req, res) => {
    logger.log("Google callback function is fired");
    res.status(200).send("here");
});

module.exports = router;