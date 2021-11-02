const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const UserActivity = require("../models").userActivity;

const router = new Router();

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const userActivityId = parseInt(req.params.id);
    const specificUserActivity = await UserActivity.findByPk(userActivityId);
    const loggedInUserId = req.user.id;
    const activityUserId = specificUserActivity.userId;
    if (loggedInUserId != activityUserId) {
      return res
        .status(400)
        .send({ message: "Activity does not belong to this user" });
    }
    specificUserActivity.destroy();
    res.status(200).send({ message: "Activity deleted" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const userActivityId = parseInt(req.params.id);
    const specificUserActivity = await UserActivity.findByPk(userActivityId);
    const loggedInUserId = req.user.id;
    const activityUserId = specificUserActivity.userId;
    if (loggedInUserId != activityUserId) {
      return res
        .status(400)
        .send({ message: "Activity does not belong to this user" });
    }
    specificUserActivity.destroy();
    res.status(200).send({ message: "Activity deleted" });
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
    const userActivity = await UserActivity.create({
      activityId,
      userId,
    });
    res.status(200).send({ message: "Activity added", userActivity });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
