const routes = {};
module.exports = app => {
  const services = require("../services/index.js");
  routes.products = require("./product.js")(app, services);
  routes.collections = require("./collection.js")(app, services);
  return routes;
};
