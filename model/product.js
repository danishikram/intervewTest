module.exports = (sequelize, datatype) => {
  const Product = sequelize.define("Product", {
    id: {
      type: datatype.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: datatype.STRING(255)
    }
  });
  Product.associate = model => {
    Product.belongsTo(model.Collection);
  };
  return Product;
};
