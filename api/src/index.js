const Server = require("./Server");

initAll();

function initAll() {
    (new Server()).start();
}