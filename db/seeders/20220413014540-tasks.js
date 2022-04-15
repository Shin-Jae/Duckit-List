'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Tasks', [
      { description: "Go to Africa", timeframe: new Date('2025-01-02'), cost: "2000", completed: false, image: "null", listId: "1", createdAt: new Date(), updatedAt: new Date() },
      { description: "Swim with Sharks", timeframe: new Date(), cost: "200", completed: false, image: "null", listId: "2", createdAt: new Date(), updatedAt: new Date() },
      { description: "Visit the Sahara", timeframe: new Date(), cost: "1500", completed: true, image: "null", listId: "1", createdAt: new Date(), updatedAt: new Date() },
      { description: "Go to Gordan Ramsey's Restaurant", timeframe: new Date(), cost: "250", completed: true, image: "null", listId: "3", createdAt: new Date(), updatedAt: new Date() },
      { description: "Swim in Vault of $$$", timeframe: new Date(), cost: "0", completed: true, image: "null", listId: "6", createdAt: new Date(), updatedAt: new Date() },
      { description: "Have more commits than Joon", timeframe: new Date(), cost: "10", completed: true, image: "null", listId: "2", createdAt: new Date(), updatedAt: new Date() }

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
