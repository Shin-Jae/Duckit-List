const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET splash page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Duck it!' });
});

router.get('/home', asyncHandler(async (req, res) => {
  const user = req.session.auth;
  console.log('77777777', user)
  if (!user) {
    return res.redirect('/');
  }
  const tasks = await db.Task.findAll();

  res.render('homepage', {
    title: 'Welcome to Duckit List!', tasks
  })
}));

router.get('/search/:query', asyncHandler(async (req, res) => {
  const { query } = req.params;
  const user = req.session.auth;

  // find all lists associated with user that matches query
  const listResults = await db.List.findAll({
    where: {
      name: {
        [Op.iLike]: `%${query}%`
      },
      userId: user.userId
    }
  });

  // find all tasks matching query that are also owned by user through List
  const taskResults = await db.Task.findAll({
    where: {
      description: {
        [Op.iLike]: `%${query}%`
      }
    },
    include: [{
      model: db.List,
      where: {
        userId: user.userId
      }
    }]
  });

  // used to organize task results under one list
  const tasks = {};

  // iterate through each task to organize by list
  taskResults.forEach((task) => {
    const listObj = task.List;

    if (!tasks[listObj.name]) {
      tasks[listObj.name] = {
        id: listObj.id,
        name: listObj.name,
        userId: listObj.userId,
        createdAt: listObj.createdAt,
        updatedAt: listObj.updatedAt,
        Tasks: [{
          id: task.id,
          description: task.description,
          timeframe: task.timeframe,
          cost: task.cost,
          completed: task.completed,
          image: task.image,
          listId: task.listId,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt
        }]
      };
    } else {
      tasks[listObj.name].Tasks.push({
        id: task.id,
        description: task.description,
        timeframe: task.timeframe,
        cost: task.cost,
        completed: task.completed,
        image: task.image,
        listId: task.listId,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt
      });
    }
  });

  // convert obj to array
  const listWithMatchingTasks = Object.values(tasks);

  // sort tasks by id
  listWithMatchingTasks.forEach((list) => {
    list.Tasks.sort((a, b) => a.id - b.id);
  });

  return res.render("searchbar", { listResults, taskResults: listWithMatchingTasks });
}));

module.exports = router;
