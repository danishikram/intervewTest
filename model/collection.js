module.exports = (sequelize, datatype) => {
  const Collection = sequelize.define("Collection", {
    id: {
      type: datatype.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    collection_name: {
      type: datatype.STRING(255)
    }
  });
  Collection.associate = model => {
    Collection.hasMany(model.Product);
  };
  return Collection;
};
