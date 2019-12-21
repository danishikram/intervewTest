module.exports = (app, services) => {
  const router = app.Router();
  const { Product } = services;
  router.post("/", async (req, res) => {
    const result = await Product.create(req);
    return res.status(result.status).json(result);
  });
  router.get("/findAll", async (req, res) => {
    const result = await Product.findAll(req);
    return res.status(result.status).json(result);
  });
  router.get("/findById/:id", async (req, res) => {
    const result = await Product.findById(req);
    return res.status(result.status).json(result);
  });

  router.put("/update/:id", async (req, res) => {
    let result = await Product.update(req);
    return res.status(result.status).json(result.data);
  });
  router.delete("/delete/:id", async (req, res) => {
    let result = await Product.delete(req);
    return res.status(result.status).json(result);
  });
  return router;
};
