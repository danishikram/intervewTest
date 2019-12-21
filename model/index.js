const env = require("../bin/env.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = require("../model/product.js")(sequelize, Sequelize);
db.Collection = require("../model/collection.js")(sequelize, Sequelize);
if (db.Product.associate) {
  db.Product.associate(db);
}
if (db.Collection.associate) {
  db.Collection.associate(db);
}
module.exports = db;
