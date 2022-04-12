'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [
      { name: 'Travel', userId: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Food', userId: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Career', userId: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Travel', userId: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Art', userId: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music', userId: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Adventure', userId: '3', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
