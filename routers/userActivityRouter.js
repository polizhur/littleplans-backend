const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const UserActivity = require("../models").userActivity;
const Activity = require("../models").activity;
const Address = require("../models").address;
const Category = require("../models").category;
const AgeGroup = require("../models").ageGroup;

const router = new Router();

// router.get("/me", authMiddleware, async (req, res, next) => {
//   const userId = parseInt(req.params.id);
//   const userActivities = await UserActivity.findAll({
//     where: {
//       userId: userId,
//     },
//     include: [Address, Category, AgeGroup],
//   });
//   return userActivities;
//   //return "hai";
// });

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const activityId = parseInt(req.params.id);

    const specificUserActivity = await UserActivity.findOne({
      where: {
        userId: req.user.id,
        activityId: activityId,
      },
    });

    if (specificUserActivity) {
      specificUserActivity.destroy();
      res.status(200).send({ message: "Activity deleted" });
    } else {
      res.status(404).send({ message: "Activity not found" });
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { activityId } = req.body;
    if (!activityId) {
      return res
        .status(400)
        .send({ message: "An activityId must be provided" });
    }
    const specificActivity = await Activity.findByPk(activityId, {
      include: [Address, Category, AgeGroup],
    });
    if (!specificActivity) {
      return res.status(400).send({ message: "Activity not found" });
    }
    const userActivity = await UserActivity.create({
      activityId,
      userId,
    });
    res.status(200).send({
      message: "Activity added",
      activity: specificActivity,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
