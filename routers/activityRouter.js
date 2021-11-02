const { Router } = require("express");
const Activity = require("../models").activity;
const Address = require("../models").address;

const router = new Router();

router.get("/", async (req, res, next) => {
  const activities = await Activity.findAll({
    include: [Address],
  });
  res.json(activities);
});

module.exports = router;
