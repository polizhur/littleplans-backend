"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "addresses",
      [
        {
          street: "Schakelstraat",
          number: 2,
          postcode: 1014,
          city: "Amsterdam",
          country: "The Netherlands",
          longitude: 4.84944,
          latitude: 52.3897,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Oosterdok",
          number: 2,
          postcode: 1011,
          city: "Amsterdam",
          country: "The Netherlands",
          longitude: 4.91208,
          latitude: 52.37399,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Gabriël Metsustraat",
          number: 16,
          postcode: 1071,
          city: "Amsterdam",
          country: "The Netherlands",
          longitude: 4.88182,
          latitude: 52.35581,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Marnixplein",
          number: 1,
          postcode: 1015,
          city: "Amsterdam",
          country: "The Netherlands",
          longitude: 4.87848,
          latitude: 52.37799,
          activityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Karel du Jardinstraat",
          number: 63,
          postcode: 1073,
          city: "Amsterdam",
          country: "The Netherlands",
          longitude: 4.89675,
          latitude: 52.35172,
          activityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Amstel",
          number: 3,
          postcode: 1011,
          city: "Amsterdam",
          country: "The Netherlands",
          longitude: 4.89675,
          latitude: 52.35172,
          activityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("addresses", null, {});
    s;
  },
};
