const express = require("express");
const prometheusClient = require("prom-client");

const app = express();

module.exports = function serveMetrics(port) {
    prometheusClient.collectDefaultMetrics();
    app.get("/metrics", async (req, res) => {
        res.send(await prometheusClient.register.metrics());
    });

    app.listen(port);
}