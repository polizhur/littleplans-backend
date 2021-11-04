const { Router } = require("express");
const auth = require("../auth/middleware");
const Category = require("../models").category;

const router = new Router();

router.get("/", async (req, res, next) => {
  const categories = await Category.findAll();
  res.json(categories);
});

module.exports = router;
