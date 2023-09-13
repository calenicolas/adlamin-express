const express = require("express");

const app = express();

module.exports = function serveApp(port) {
    app.get("/hello", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(port);
}