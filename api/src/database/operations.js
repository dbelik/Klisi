const { find } = require("../models/User");
const logger = require("../utilities/logger");

async function createUnique(model, data, findData) {
    const entity = await findOne(model, findData);
    if (!entity) return create(model, data);
    return entity;
}

async function create(model, data) {
    logger.log(`Trying to add new entity.`);
    const entity = new model(data);
    entity.save();
    logger.log(`Entity has been successfully added.`);
    return entity;
}

async function findOne(model, data) {
    logger.log(`Attempting to find entity.`);
    const entity = await model.findOne(data);
    if (entity) logger.log(`Entity was found.`);
    else logger.log(`Entity wasn't found.`);
    return entity;
}

async function findById(model, id) {
    logger.log(`Attempting to find entity.`);
    const entity = await model.findById(id);
    if (entity) logger.log(`Entity was found.`);
    else logger.log(`Entity wasn't found.`);
    return entity;
}

module.exports = {
    createUnique,
    create,
    findOne,
    findById
};