"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ageGroups",
      [
        {
          range: "0-1 years old",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          range: "1-3 years old",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          range: "3-5 years old",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          range: "5-10 years old",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          range: "10+ years old",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ageGroups", null, {});
  },
};
