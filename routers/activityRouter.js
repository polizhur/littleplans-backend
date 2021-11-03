const { Router } = require("express");
const auth = require("../auth/middleware");
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
      return res.status(400).send({ message: "An activity must have a title" });
    }

    if (!imageUrl) {
      return res
        .status(400)
        .send({ message: "An activity must have an image" });
    }

    if (!categoryId) {
      return res
        .status(400)
        .send({ message: "An activity must have an catigory" });
    }

    if (!street) {
      return res
        .status(400)
        .send({ message: "An activity must have an address" });
    }

    if (!number) {
      return res
        .status(400)
        .send({ message: "An activity must have a house number" });
    }

    if (!postcode) {
      return res
        .status(400)
        .send({ message: "An activity must have a postcode" });
    }

    if (!city) {
      return res.status(400).send({ message: "An activity must have a city" });
    }

    if (!country) {
      return res
        .status(400)
        .send({ message: "An activity must have a country" });
    }

    if (!longitude) {
      return res
        .status(400)
        .send({ message: "An activity must have a longitude" });
    }

    if (!latitude) {
      return res
        .status(400)
        .send({ message: "An activity must have a latitude" });
    }

    if (!description) {
      return res
        .status(400)
        .send({ message: "An activity must have a description" });
    }

    if (!date) {
      return res.status(400).send({ message: "An activity must have a date" });
    }

    if (!duration) {
      return res
        .status(400)
        .send({ message: "An activity must have duration" });
    }

    if (!capacity) {
      return res
        .status(400)
        .send({ message: "An activity must have a capacity" });
    }

    if (!ageGroupId) {
      return res
        .status(400)
        .send({ message: "An activity must have an age group" });
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
        ...newActivity,
        address: newAddress,
        ageGroup: ageGroup,
        category: category,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
