'use strict';

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
      password: 'DemoU$er1',
      confirmedPassword: 'DemoU$er1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Scrooge',
      lastName: 'McDuck',
      username: 'bigBills',
      email: 'scrooge@duck.com',
      password: 'moneyCh@ser2',
      confirmedPassword: 'moneyCh@ser2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Daffy',
      lastName: 'Duck',
      username: 'DaDuck123',
      email: 'daffy@duck.com',
      password: 'Ih@teBugs3',
      confirmedPassword: 'Ih@teBugs3',
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
