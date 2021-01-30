const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const config = require("config");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");

const routes = require("./routes");
const middlewares = require("./middlewares");
const auth = require("./utilities/auth");
const logger = require("./utilities/logger");
const Server = require("./utilities/Server");

const user = require("./database/user");

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
        useUnifiedTopology: true,
        useCreateIndex: true
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

    // Attach middlewares.
    server.attachMiddleware(cors());
    server.attachMiddleware(cookieSession({
        maxAge: config.get("Auth.Cookie.MaxAge"),
        keys: config.get("Auth.Cookie.Keys")
    }));
    server.attachMiddleware(passport.initialize());
    server.attachMiddleware(passport.session());

    // Attach public routes.
    server.attachRoutes("/", routes.login);
    server.attachRoutes("/", routes.test);

    // Attach authentication middleware.
    server.attachMiddleware(middlewares.auth.check);
    // Attach private routes.
    server.attachRoutes("/", routes.logout);

    server.start();
}

function initPassport() {
    const hostname = config.get("Server.Hostname");
    const port = config.get("Server.Port");

    passport.serializeUser(auth.serialize);
    passport.deserializeUser(auth.deserialize);

    passport.use(new googleStrategy({
        clientID: config.get("Auth.Google.ID"),
        clientSecret: config.get("Auth.Google.Secret"),
        callbackURL: `https://${hostname}:${port}/login/google/callback`
    }, async (access, refresh, profile, done) => {
        done(null, await user.create(profile.id));
    }));
}