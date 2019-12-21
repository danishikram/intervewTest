module.exports = db => {
  return {
    create(req) {
       return db.Collection.bulkCreate(req.body)
        .then(Collection => {
          return {
            status: 201,
            data: Collection
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
      return db.Collection.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      })
        .then(Collection => {
          return {
            status: 200,
            data: Collection
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
      return db.Collection.findByPk(req.params.id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      })
        .then(Collection => {
          return {
            status: 200,
            data: Collection
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
      return db.Collection.update(req.body, {
        where: {
          id: req.query.id
        }
      })
        .then(Collection => {
          return {
            status: 204,
            data: Collection
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
      let id = req.query.id;
      return db.Collection.destroy({
        where: {
          id: id
        }
      })
        .then(Collection => {
          return {
            status: 202,
            data: Collection
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
