const { Router } = require("express");
const auth = require("../auth/middleware");
const AgeGroup = require("../models").ageGroup;

const router = new Router();

router.get("/", async (req, res, next) => {
  const ageGroups = await AgeGroup.findAll();
  res.json(ageGroups);
});

module.exports = router;
