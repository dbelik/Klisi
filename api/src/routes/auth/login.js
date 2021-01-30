const express = require("express");
const passport = require("passport");
const config = require("config");

const logger = require("../../utilities/logger");

const router = express.Router();
router.get("/login/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/login/google/callback", passport.authenticate("google"), (req, res) => {
    const redirect = config.get("Client.Base");

    logger.log("Google callback function is fired");
    res.redirect(redirect);
});

module.exports = router;