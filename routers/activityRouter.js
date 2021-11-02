const { Router } = require("express");
const Activity = require("../models").activity;

const router = new Router();

router.get("/", async (req, res, next) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

module.exports = router;
