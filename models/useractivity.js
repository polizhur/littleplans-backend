"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userActivity.belongsTo(models.user);
      userActivity.belongsTo(models.activity);
    }
  }
  userActivity.init(
    {
      userId: DataTypes.INTEGER,
      activityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userActivity",
    }
  );
  return userActivity;
};
