'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Demo',
      lastName: 'User',
      username: 'DemoUser',
      email: 'demo@user.com',
      hashedPassword: bcrypt.hashSync('DemoU$er1', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Scrooge',
      lastName: 'McDuck',
      username: 'bigBills',
      email: 'scrooge@duck.com',
      hashedPassword: bcrypt.hashSync('moneyCh@ser2', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Daffy',
      lastName: 'Duck',
      username: 'DaDuck123',
      email: 'daffy@duck.com',
      hashedPassword: bcrypt.hashSync('Ih@teBugs3', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
