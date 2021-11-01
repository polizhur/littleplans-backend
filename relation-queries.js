const { user, activity, address, category, useractivity } = require("./models");

const User = require("./models").user;
const Activity = require("./models").activity;

async function getUsersWithActivities() {
  const users = await User.findAll({ include: [Activity] });
  return users.map((data) => data.get({ plain: true }));
}

getUsersWithActivities().then((data) => console.log(data));

async function activitiesWithUsers() {
  const activities = await activity.findAll({
    include: [address],
  });

  return activities.map((activity) => activity.toJSON());
}

activitiesWithUsers().then((activities) => console.log(activities));
