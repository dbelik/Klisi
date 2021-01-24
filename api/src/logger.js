const winston = require("winston");
const path = require("path");
const config = require("config");

class Logger {
    constructor() {
        this._logger = this._createLogger();
    }

    log(message) {
        this._logger.info(message);
    }

    error(message) {
        this._logger.error(message);
    }

    _createLogger() {
        const combinedLog = path.join(__dirname, "../", config.get("Logger.Combined"));
        const errorLog = path.join(__dirname, "../", config.get("Logger.Error"));

        return winston.createLogger({
            level: "debug",
            transports: [
                new winston.transports.Console(),

                new winston.transports.File({ filename: combinedLog }),
                new winston.transports.File({ filename: errorLog, level: "error" })
            ]
        })
    }
}

module.exports = new Logger();