const appPort = 8080;
const metricsPort = 9001;

const serveApp = require("./serve_app");
const serveMetrics = require("./serve_metrics");

serveApp(appPort);
serveMetrics(metricsPort);
