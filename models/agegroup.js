"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ageGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ageGroup.hasMany(models.activity);
    }
  }
  ageGroup.init(
    {
      range: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ageGroup",
    }
  );
  return ageGroup;
};
