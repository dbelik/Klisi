const logger = require("../utilities/logger");

async function create(model, data, findData) {
    logger.log(`Attempting to find entity.`);
    const entity = await model.findOne(findData);

    if (!entity) {
        logger.log(`Trying to add new entity.`);
        await (new model(data)).save();

        logger.log(`Entity has been successfully added.`);
    } else {
        logger.log(`Entity already exists.`);
    }
}

module.exports = {
    create
};