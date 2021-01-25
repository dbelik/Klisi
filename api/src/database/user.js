const models = require("../models");
const database = require("./operations");
const logger = require("../utilities/logger");

async function create(googleID) {
    logger.log(`Starting to add new user (Google ID = ${googleID}).`);

    const data = { googleID: googleID };
    const findData = { googleID: data.googleID };
    return await database.createUnique(models.User, data, findData);
}

async function find(googleID) {
    return await database.findOne(models.User, { googleID: googleID });
}

async function findById(id) {
    return await database.findById(models.User, id);
}

module.exports = {
    create,
    find,
    findById
};