const user = require("../database/user");
const logger = require("./logger");

function serialize(user, done) {
    logger.log(`Serializing user with Google ID = ${user.id}`);
    done(null, user.id);
}

async function deserialize(id, done) {
    logger.log(`Deserializing user with Google ID = ${id}`);
    const storedUser = await user.findById(id);
    if (storedUser) done(null, storedUser);
}

module.exports = {
    serialize, 
    deserialize
}