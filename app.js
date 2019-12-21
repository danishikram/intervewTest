const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routers = require("./routes")(express);
app.use("/products", routers.products);
app.use("/collections", routers.collections);
module.exports = app;
