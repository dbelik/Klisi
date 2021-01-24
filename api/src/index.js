const Server = require("./Server");
const Logger = require("./logger");

// Initialize server, routes, etc.
initAll();

function initAll() {
    (new Server()).start();
}