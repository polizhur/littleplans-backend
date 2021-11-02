"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activities",
      [
        {
          title: "Paper workshop",
          imageUrl:
            "https://blackcattheatre.nl/wp-content/uploads/2020/06/Paper_workshop_cover-2.jpg",
          date: "2021-11-14 16:00",
          duration: 30,
          isParentRequired: true,
          ageGroup: 2,
          capacity: 20,
          categoryId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Humania",
          imageUrl:
            "https://www.nemosciencemuseum.nl/media/filer_public_thumbnails/filer_public/c0/2c/c02c53b2-e95f-412a-8c97-db5684c2482c/dd531768.jpg__1200x630_q85_crop_subject_location-1676%2C1314_upscale.jpg",
          date: "2021-11-21 10:00",
          duration: 60,
          isParentRequired: false,
          ageGroup: 5,
          capacity: 35,
          categoryId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Children's music day",
          imageUrl:
            "http://img-cdn.tid.al/o/a6dea02a46c254fba3cf6acb1081c0e384ea83e5.jpg",
          date: "2021-11-28 13:30",
          duration: 60,
          isParentRequired: true,
          ageGroup: 4,
          capacity: 45,
          categoryId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Swimming clase",
          imageUrl:
            "https://www.zwembadbranche.nl/wp-content/uploads/2019/06/zwemlesachterkantkinderen.jpg",
          date: "2021-11-30 10:30",
          duration: 60,
          isParentRequired: true,
          ageGroup: 3,
          capacity: 25,
          categoryId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Art workshop",
          imageUrl:
            "https://static.wixstatic.com/media/b0f43d_b557c729437f4228bd2b447cab48fabc~mv2.jpg/v1/crop/x_380,y_0,w_482,h_684/fill/w_279,h_396,al_c,q_80,usm_0.66_1.00_0.01/My%20Little%20Van%20Gogh%20-%20Anita%20Perminova%20-%20Photoshoot%20April%202018-2.webp",
          date: "2021-12-06 16:00",
          duration: 60,
          isParentRequired: true,
          ageGroup: 2,
          capacity: 10,
          categoryId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "GOUD! Musical fairy tale for everyone from the age of 4",
          imageUrl:
            "https://www.operaballet.nl/sites/default/files/styles/twig_image_landscape_685_485/public/images/GOUD%21_fotonaasttekst.jpg?itok=BNliwqRu",
          date: "2021-12-26 14:00",
          duration: 45,
          isParentRequired: true,
          ageGroup: 4,
          capacity: 60,
          categoryId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("activities", null, {});
  },
};
