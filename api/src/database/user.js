const models = require("../models");
const database = require("./operations");
const logger = require("../utilities/logger");

async function user(googleID) {
    logger.log(`Starting to add new user (Google ID = ${googleID}).`);

    const data = { googleID: googleID };
    const findData = { googleID: data.googleID };
    await database.create(models.User, data, findData);
}

module.exports = user;