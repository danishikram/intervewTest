module.exports = db => {
  return {
    create(req) {
      let cp = req.body;
      const { Collection } = cp;
      return db.sequelize
        .transaction(async transaction => {
          let Product = await db.Product.create(req.body, {
            transaction: transaction
          });
          Collection.forEach(element => {
            element.CollectionId = Collection.id;
          });
          await db.Collection.bulkCreate(Collection, {
            returning: true,
            transaction: transaction
          });
          return {
            data: Product
          };
        })
        .then(Product => {
          return {
            status: 201,
            data: Product
          };
        })
        .catch(error => {
          return {
            status: 500,
            error: error
          };
        });
    },
    findAll(req) {
      return db.Product.findAll({
        include: {
          model: db.Collection
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      })
        .then(Product => {
          return {
            status: 200,
            data: Product
          };
        })
        .catch(error => {
          return {
            status: 500,
            error: error
          };
        });
    },
    findById(req) {
      return db.Product.findByPk(req.params.id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      })
        .then(Product => {
          return {
            status: 200,
            data: Product
          };
        })
        .catch(error => {
          return {
            status: 500,
            error: error
          };
        });
    },
    update(req) {
      const id = req.params.id;
      return db.Product.update(req.body, {
        where: {
          id: req.params.id
        }
      })
        .then(Product => {
          return {
            status: 204,
            data: Product
          };
        })
        .catch(error => {
          return {
            status: 500,
            error: error
          };
        });
    },
    delete(req) {
      let id = req.params.id;
      return db.Product.destroy({
        where: {
          id: id
        }
      })
        .then(Product => {
          return {
            status: 202,
            data: Product
          };
        })
        .catch(error => {
          return {
            status: 500,
            error: error
          };
        });
    }
  };
};
