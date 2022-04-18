'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Tasks', [
      {
        description: "Travel to Africa",
        timeframe: new Date('2025-01-02'),
        cost: 2000,
        completed: false,
        image: null,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Visit the Eiffel Tower",
        timeframe: new Date(),
        cost: 1200,
        completed: false,
        image: null,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Visit the Sahara",
        timeframe: new Date(),
        cost: 1500,
        completed: true,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F85%2Fbc%2Fdf%2F85bcdffc8307cbfe5c94dcc025660afd.jpg&f=1&nofb=1',
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Go to Gordan Ramsey's Restaurant",
        timeframe: new Date(),
        cost: 250,
        completed: true,
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nydailynews.com%2Fresizer%2F_H8q5sfG74N5TKCcBt2JSmhh_5A%3D%2F1400x0%2Farc-anglerfish-arc2-prod-tronc.s3.amazonaws.com%2Fpublic%2FSKKR4FCPPYHZX2VIHD5TR5NF64.jpg&f=1&nofb=1',
        listId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Swim in Vault of $$$",
        timeframe: new Date(),
        cost: 0,
        completed: true,
        image: null,
        listId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Have more commits than Joon",
        timeframe: new Date(),
        cost: 0,
        completed: true,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nikitakazakov.com%2Fassets%2Fimages%2F2020%2Fgit_green_boxes.png&f=1&nofb=1',
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Go to Korea",
        timeframe: "2023-04-19T01:25:14.425Z",
        cost: 2000,
        completed: false,
        image: "https://www.thoughtco.com/thmb/I4Ez8sfyhdsZ62KLdNCkCVOJeaE=/2119x1415/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-902452584-5c534c1b46e0fb0001c07a30.jpg",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Get to 3 connections on Linkedin",
        timeframe: "2027-05-19T15:20:54.888Z",
        cost: 5,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Maybe make some friends",
        timeframe: "2029-01-20T22:13:59.365Z",
        cost: 38044,
        completed: false,
        image: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Make sure to make Leo an admin at JoonLove.com due to his devotion to Joon",
        timeframe: "2030-08-28T03:41:53.167Z",
        cost: 492930,
        completed: true,
        image: "Make sure to make Leo an admin at JoonLove.com due to his devotion to Joon",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Tour the Lourve",
        timeframe: "2031-09-08T04:56:26.389Z",
        cost: 476646,
        completed: true,
        image: "https://media.npr.org/assets/img/2021/03/29/gettyimages-1193604575_custom-41849d240200da7ff86478a110cb60db3e988b4a-s1100-c50.jpg",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Wake up the Dyno!",
        timeframe: "2031-02-17T08:00:12.370Z",
        cost: 230741,
        completed: false,
        image: "https://repository-images.githubusercontent.com/395035783/64dbbfcd-51a7-44ca-92f3-36dc8364e4a8",
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Graduate",
        timeframe: "2030-01-03T09:24:07.061Z",
        cost: 251328,
        completed: false,
        image: "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/09/What-is-a-Graduate-Degree.png",
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Pass the group project",
        timeframe: "2030-05-11T23:34:33.675Z",
        cost: 908045,
        completed: false,
        image: null,
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Get past Mod 3",
        timeframe: "2025-06-02T02:16:34.499Z",
        cost: 468072,
        completed: true,
        image: "2Fwp-content%2Fuploads%2F2021%2F02%2Fonline-coding-classes.jpg&f=1&nofb=1",
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Make it past Mod 2",
        timeframe: "2027-12-02T10:04:00.894Z",
        cost: 192009,
        completed: true,
        image: "ox.com%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F2%2F2019%2F05%2Fgraduation-slideshows.jpg&f=1&nofb=1",
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Make Jae have more opinions",
        timeframe: "2029-12-18T04:07:31.962Z",
        cost: 415264,
        completed: false,
        image: null,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Adopt a pet",
        timeframe: "2028-02-09T01:23:05.822Z",
        cost: 125599,
        completed: true,
        image: "https://images.newscientist.com/wp-content/uploads/2015/02/dn27049-1_800.jpg?width=1200&enable=upscale",
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
