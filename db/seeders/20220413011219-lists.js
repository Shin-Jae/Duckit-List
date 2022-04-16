'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Lists', [
      {
        name: "Travel",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Social",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Food",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adventure",
        userId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Travel",
        userId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Phuket",
        userId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tokyo",
        userId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Career",
        userId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dubai",
        userId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "doloribus",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "eius",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "saepe",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
