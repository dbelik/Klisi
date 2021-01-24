const https = require("https");
const fs = require("fs");
const config = require("config");
const path = require("path");
const express = require("express");

const logger = require("./logger");

module.exports = class Server {
    constructor() {
        this.port = config.get("Server.Port");

        this.app = express();
        this.httpsServer = this._createHttpsServer();
    }

    start() {
        this.httpsServer.listen(this.port, () => {
            logger.log(`Starting the server at https://localhost:${this.port}`);
        });
    }

    // Private methods
    _createHttpsServer() {
        const keyPath = config.get("SSL.KeyPath");
        const certPath = config.get("SSL.CertPath");
        const passphrase = config.get("SSL.Passphrase");

        return https.createServer({
            key: fs.readFileSync(path.join(__dirname, "..", keyPath)),
            cert: fs.readFileSync(path.join(__dirname, "..", certPath)),
            passphrase: passphrase
        }, this.app);
    }
}