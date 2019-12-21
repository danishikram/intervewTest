module.exports = (app, services) => {
    const router = app.Router();
    const { Collection } = services;
    router.post("/", async (req, res) => {
      const result = await Collection.create(req);
      return res.status(result.status).json(result);
    });
    router.get("/findAll", async (req, res) => {
      const result = await Collection.findAll(req);
      return res.status(result.status).json(result);
    });
    router.get("/findById/:id", async (req, res) => {
      const result = await Collection.findById(req);
      return res.status(result.status).json(result);
    });
  
    router.put("/update/:id", async (req, res) => {
      let result = await Collection.update(req);
      return res.status(result.status).json(result.data);
    });
    router.delete("/delete/:id", async (req, res) => {
      let result = await Collection.delete(req);
      return res.status(result.status).json(result);
    });
    return router;
  };
  