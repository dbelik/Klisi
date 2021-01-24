const https = require("https");
const fs = require("fs");
const config = require("config");
const path = require("path");
const express = require("express");

module.exports = class Server {
    constructor() {
        this.port = config.get("Server.Port");

        this.app = express();
        this.httpsServer = this._createHttpsServer();
    }

    start() {
        this.httpsServer.listen(this.port, () => {
            console.log(`Starting the server at https://localhost:${this.port}`);
        });
    }

    // Private methods
    _createHttpsServer() {
        return https.createServer({
            key: fs.readFileSync(path.join(__dirname, "../ssl/key.pem")),
            cert: fs.readFileSync(path.join(__dirname, "../ssl/cert.pem")),
            passphrase: config.get("SSL.Passphrase")
        }, this.app);
    }
}