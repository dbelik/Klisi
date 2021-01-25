const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const config = require("config");
const mongoose = require("mongoose");

const logger = require("./utilities/logger");
const Server = require("./utilities/Server");
const routes = require("./routes");

// Initialize server, routes, etc.
initAll();

async function initAll() {
    try {
        await initDatabase();
        initPassport();
        initServer();
    } catch (error) {
        logger.error(`${error}`);
    }
}

async function initDatabase() {
    const dbUrl = config.get("Database.URL");
    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        await mongoose.connect(dbUrl, dbOptions);
        logger.log("Successfully connected to the database");
    } catch (error) {
        logger.error(`${error}`);
        throw new Error("Couldn't connect to database. Aborting");
    }
}

function initServer() {
    const server = new Server();
    server.attachRouter(routes.auth);
    server.start();
}

function initPassport() {
    const hostname = config.get("Server.Hostname");
    const port = config.get("Server.Port");

    passport.use(new googleStrategy({
        clientID: config.get("Auth.Google.ID"),
        clientSecret: config.get("Auth.Google.Secret"),
        callbackURL: `https://${hostname}:${port}/login/google/callback`
    }, (access, refresh, profile, done) => {
        console.log(profile);
    }));
}