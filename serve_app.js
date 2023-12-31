const express = require("express");
const HttpClient = require("./http_client");

const app = express();

module.exports = function serveApp(port) {
    app.get("/hello", (req, res) => {
        res.json({
            greeting: "Hello world!"
        });
    });

    app.get("/remote", async (req, res) => {
        const httpClient = new HttpClient();
        const response = await httpClient.get("http://" + req.query.host + ":8080/hello");

        response.host = req.query.host;
        res.json(response);
    });

    app.listen(port);
}