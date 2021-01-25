const express = require("express");
const passport = require("passport");

const logger = require("../utilities/logger");

const router = express.Router();
router.get("/logout", (req, res) => {
    req.logout();
    logger.log("Log out user");
    res.redirect("/");
});
module.exports = router;