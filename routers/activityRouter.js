const { Router } = require("express");
const auth = require("../auth/middleware");
const Activity = require("../models").activity;
const Address = require("../models").address;
const Category = require("../models").category;
const AgeGroup = require("../models").ageGroup;

const router = new Router();

router.get("/", async (req, res, next) => {
  const activities = await Activity.findAll({
    include: [Address, Category, AgeGroup],
    order: [["date", "asc"]],
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

router.post("/", auth, async (req, res, next) => {
  try {
    const {
      title,
      imageUrl,
      categoryId,
      street,
      number,
      postcode,
      city,
      country,
      longitude,
      latitude,
      date,
      duration,
      capacity,
      description,
      ageGroupId,
      isParentRequired,
    } = req.body;

    if (!title) {
      return res.status(400).send({ message: "Please, provide a valid title" });
    }

    if (!imageUrl) {
      return res.status(400).send({ message: "Please, provide a valid image" });
    }

    if (!categoryId) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid category" });
    }

    if (!street) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid address" });
    }

    if (!number) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid house number" });
    }

    if (!postcode) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid postcode" });
    }

    if (!city) {
      return res.status(400).send({ message: "Please, provide a valid city" });
    }

    if (!country) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid country" });
    }

    if (!longitude) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid longitude" });
    }

    if (!latitude) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid latitude" });
    }

    if (!description) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid description" });
    }

    if (!date) {
      return res.status(400).send({ message: "Please, provide a valid date" });
    }

    if (!duration) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid duration" });
    }

    if (!capacity) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid capacity" });
    }

    if (!ageGroupId) {
      return res
        .status(400)
        .send({ message: "Please, provide a valid age group" });
    }

    const newActivity = await Activity.create({
      title,
      imageUrl,
      categoryId,
      description,
      date,
      duration,
      capacity,
      ageGroupId,
      isParentRequired,
      userId: req.user.id,
    });

    const newAddress = await Address.create({
      street,
      number,
      postcode,
      city,
      country,
      longitude,
      latitude,
      activityId: newActivity.id,
    });

    const ageGroup = await AgeGroup.findByPk(ageGroupId);

    const category = await Category.findByPk(categoryId);

    return res.status(201).send({
      message: "Activity created",
      activity: {
        ...newActivity.dataValues,
        address: newAddress,
        ageGroup: ageGroup,
        category: category,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const activityId = parseInt(req.params.id);

    const specificActivity = await Activity.findByPk(activityId);

    if (!specificActivity) {
      return res.status(404).send({ message: "Activity not found" });
    }

    if (specificActivity.userId !== req.user.id) {
      return res
        .status(403)
        .send({ message: "Activity doesn't belong to the user" });
    }

    specificActivity.destroy();
    res.status(200).send({ message: "Activity deleted" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
