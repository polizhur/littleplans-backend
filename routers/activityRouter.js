const { Router } = require("express");
const Activity = require("../models").activity;
const Address = require("../models").address;
const Category = require("../models").category;
const AgeGroup = require("../models").ageGroup;

const router = new Router();

router.get("/", async (req, res, next) => {
  const activities = await Activity.findAll({
    include: [Address, AgeGroup],
  });
  res.json(activities);
});

router.get("/:id", async (req, res, next) => {
  try {
    const activityId = parseInt(req.params.id);
    const specificActivity = await Activity.findByPk(activityId, {
      include: [Address, Category, AgeGroup],
    });
    if (specificActivity) {
      res.send(specificActivity);
    } else {
      res.status(404).send("Activity not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
