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
          description:
            "Paper is an incredibly inspiring material. It has absolutely unlimited creative potential, just like children’s imagination. Would you like to know how it feels to take a bath in the paper rain? How does it feel to fly with paper wings, be wrapped in a paper veil, to dive into a paper lake, play with a paper snowballs or to build a high mountain where you can bury? There are so many types of paper, they have different sizes, textures, and structures, it can be formed into any shape, transformed into whatever we want. Welcome to our paper world – a paradise for creativity.",
          date: "2021-11-14 16:00",
          duration: 30,
          isParentRequired: true,
          ageGroupId: 2,
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
          description:
            "A new exhibition about the human race. By participating in physical challenges and working on brain teasers about all kinds of dilemmas you will discover more about how your body and brain work. You will discover loads of things about your body that are too good to miss! The biology, sociology, and the psychology of people will all feature in the exhibition. Humania discusses a host of subjects about who you are: from your name to how you celebrate your birthday, from the amount of willpower you have to the cells that make up your body. Also included are more difficult topics such as sex or death. Are you truly as unique as you think you are? Or are we all alike? Centrepiece of the exhibition is the 8.5-metre sculpture A Handstand, a spectacular work by the Dutch artist Florentijn Hofman. On a colossal scale, he created a human figure standing on its hands in a skeleton suit. Through this ultimate depiction of how to be upside down, inside out and yet perfectly in balance, the artist invites us to take a slightly different look at the world around us. It makes us wonder: Is there someone in that suit? And if so, who are they? The artwork also challenges you to do your own handstand in the museum and take a fresh look at your surroundings.",
          date: "2021-11-21 10:00",
          duration: 60,
          isParentRequired: false,
          ageGroupId: 5,
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
          description:
            "On Sunday, 28 November, the Concertgebouworkest is opening its doors to children eight years old and under! They, together with their parents or grandparents, are invited to attend a Children’s Music Day at Gabriël Metsustraat 16 in Amsterdam. Musicians from the Concertgebouworkest will be giving mini-concerts for children between the ages of four and eight in the Amsterdam Hall starting from 1.30 p.m.: Carnival of the Animals and Peter and the Wolf.",
          date: "2021-11-28 13:30",
          duration: 60,
          isParentRequired: true,
          ageGroupId: 4,
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
          description:
            "Calmly recreate together with your child(ren). To ensure the safety of your young child(ren), it is important that all children without a swimming certificate wear swimming rings. Didn't you bring your swimming rings? Children without a swimming certificate may only enter if accompanied by an adult with a swimming certificate (maximum two children per adult).",
          date: "2021-11-30 10:30",
          duration: 60,
          isParentRequired: true,
          ageGroupId: 3,
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
          description:
            "Through hands-on activities develop their sensory, fine and gross as theisconfident and creativity. It is all about sensory, messy and creative play. It is a free-flow session, where you and your little one will find every week different “provocations or invitations to create” in our 4 stations: Sensory and Messy play, Modelling (play dough/clay), Mural, Painting project.  This is the best messy playdate you’ll ever have, and here's the best part: clean up is on us. Enjoy! We prepare the activities and the Atelier based on the age of the participants, so we are happy to have children of different ages simultaneously in our sessions.",
          date: "2021-12-06 16:00",
          duration: 60,
          isParentRequired: true,
          ageGroupId: 2,
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
          description:
            "Composer Leonard Evers and librettist Flora Verbrugge wrote Goud! In 2012 for Theater Sonnevanck. The youth opera became an international success: various opera houses in Europe added the work to their repertoire. One of Sophie de Lint’s first wishes when she became Dutch National Opera’s director was to produce Goud!. The premiere was repeatedly postponed due to the corona pandemic, and last season there was no choice but to stage the show’s premiere online. This year the show will finally be played live in our theatre during the Christmas holidays. For Dutch National Opera, Leonard Evers has also written the award-winning opera for preschoolers Kriebel which goes on tour this year.",
          date: "2021-12-26 14:00",
          duration: 45,
          isParentRequired: true,
          ageGroupId: 4,
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
