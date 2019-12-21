const db = require('../model/index');
db.sequelize.sync({force: true})
.then(() => {console.log("reset the database")});