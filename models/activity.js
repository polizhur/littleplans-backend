"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activity.belongsTo(models.user);
      activity.belongsTo(models.category);
      activity.hasOne(models.address);
      activity.belongsToMany(models.user, {
        through: "userActivities",
        foreignKey: "activityId",
      });
    }
  }
  activity.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      duration: { type: DataTypes.INTEGER, allowNull: false },
      ageGroup: { type: DataTypes.INTEGER, allowNull: false },
      capacity: { type: DataTypes.INTEGER, allowNull: false },
      isParentRequired: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "activity",
    }
  );
  return activity;
};
