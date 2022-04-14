const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const router = express.Router();

// alternative GET route '/list/:id(\\d+)'
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const listId = parseInt(req.params.id, 10)
  const tasks = await db.List.findByPk(listId);
  res.render("viewlist", {tasks, csrfToken: req.csrfToken()});
}));

router.get('/new/:listId', csrfProtection, (req, res) => {
  const listId = req.params.listId;
  res.render("addtolist", {csrfToken: req.csrfToken(), listId});
});

const taskValidators = [
  check("description")
  .exists({ checkFalsy: true})
  .withMessage("Please provide a description of your goal")
]

// alternative GET route '/:id(\\d+)/new'
router.post('/new', csrfProtection, taskValidators, asyncHandler(async (req, res) => {
  const { listId, description, cost, timeframe, image, category } = req.body;
  // const listId = parseInt(req.params.id, 10)
  console.log("******************",req.params)
  let errors = [];
  const validatorErrors = validationResult(req)
  if (validatorErrors.isEmpty()) {
    const task = await db.Task.create({
      listId,
      description,
      cost,
      image,
      timeframe,
      category,
      completed: false
    })
    return res.redirect('/lists')
  } else {
    const errors = validatorErrors.array().map(error => error.msg)
    res.render("addtolist", {
      title: "Add to list",
      errors,
      csrfToken: req.csrfToken(),
      task
    })
  }
}));


router.delete('/:id(\\d+)', asyncHandler (async (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = await db.Task.findByPk(taskId);
  await task.destroy();
  res.json({ message: 'Task successfully deleted'})
}))



module.exports = router;
