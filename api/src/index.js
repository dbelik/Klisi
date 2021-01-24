const Server = require("./Server");

// Initialize server, routes, etc.
initAll();

function initAll() {
    (new Server()).start();
}