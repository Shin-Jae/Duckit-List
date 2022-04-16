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
        description: "Go to Africa",
        timeframe: new Date('2025-01-02'),
        cost: 2000,
        completed: false,
        image: null,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Swim with Sharks",
        timeframe: new Date(),
        cost: 200,
        completed: false,
        image: null,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Visit the Sahara",
        timeframe: new Date(),
        cost: 1500,
        completed: true,
        image: null,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Go to Gordan Ramsey's Restaurant",
        timeframe: new Date(),
        cost: 250,
        completed: true,
        image: null,
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
        cost: 10,
        completed: true,
        image: null,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "sed consequatur autem deleniti consequuntur",
        timeframe: "2023-04-19T01:25:14.425Z",
        cost: 106794,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "ab dignissimos non eaque",
        timeframe: "2027-05-19T15:20:54.888Z",
        cost: 907896,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "et quisquam perferendis sed",
        timeframe: "2029-01-20T22:13:59.365Z",
        cost: 38044,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "aspernatur deserunt cum cupiditate",
        timeframe: "2030-08-28T03:41:53.167Z",
        cost: 492930,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "eum voluptatem eligendi neque quisquam",
        timeframe: "2031-09-08T04:56:26.389Z",
        cost: 476646,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "veniam aliquid labore",
        timeframe: "2031-02-17T08:00:12.370Z",
        cost: 230741,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "laboriosam earum velit veritatis",
        timeframe: "2030-01-03T09:24:07.061Z",
        cost: 251328,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "ut aspernatur sed aut",
        timeframe: "2030-05-11T23:34:33.675Z",
        cost: 908045,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "provident sed et",
        timeframe: "2025-06-02T02:16:34.499Z",
        cost: 468072,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "dicta autem possimus asperiores rerum",
        timeframe: "2027-12-02T10:04:00.894Z",
        cost: 192009,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "perspiciatis natus ea omnis",
        timeframe: "2029-12-18T04:07:31.962Z",
        cost: 415264,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "fugit sed magnam consequuntur",
        timeframe: "2028-02-09T01:23:05.822Z",
        cost: 125599,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "ut blanditiis dolor qui voluptatem",
        timeframe: "2027-03-30T22:40:49.923Z",
        cost: 668455,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "assumenda ducimus cupiditate labore magnam",
        timeframe: "2024-11-07T17:14:44.471Z",
        cost: 970781,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "perspiciatis soluta consectetur et non",
        timeframe: "2030-02-03T01:09:24.480Z",
        cost: 511131,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "mollitia iure et odit amet",
        timeframe: "2029-01-30T10:22:42.372Z",
        cost: 517435,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "enim et cupiditate",
        timeframe: "2024-06-25T18:15:51.948Z",
        cost: 194319,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "odio quia quae corporis",
        timeframe: "2025-06-14T16:44:07.471Z",
        cost: 756004,
        completed: true,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "aut odit saepe nulla ex",
        timeframe: "2023-12-06T06:23:06.989Z",
        cost: 697349,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "est fugit asperiores sit",
        timeframe: "2026-01-26T12:03:59.412Z",
        cost: 920303,
        completed: false,
        image: "http://loremflickr.com/640/480/city",
        listId: 1,
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
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
