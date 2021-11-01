"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Arts and drama",
          description:
            "The best Arts & Drama classes & activities for kids. From acting & drama to drawing and painting.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Educational",
          description:
            "The best Educational classes & activities for kids. From coding & engineering to cooking and creativity.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music and dance",
          description:
            "The best Music & Dance classes & activities for kids. From Ballet, Street Dance and Hip Hop to Music, Dance & Songs.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sports",
          description:
            "The best Sports classes & activities for kids. From Football, Swimming & Martial Arts to Tennis, Diving, Acrobatics.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wellbeing",
          description:
            "The best Wellbeing classes & activities for kids. From Baby and toddler yoga to Buggyfit and massage.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
