const db = require('../model/index.js');
module.exports = {
    Product: require('./product.js')(db),
    Collection: require('./collection.js')(db)
}