const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
  const tasks = await db.Task.findAll();
  res.render("view-tasks", {tasks});
}));

router.get('/new', (req, res) => {
  res.render("create-task");
});

const taskValidators = [
  check("description")
  .exists({ checkFalsy: true})
  .withMessage("Please provide a description of your goal")
]

router.post('/new', csrfProtection, taskValidators, asyncHandler(async (req, res) => {
  const { description, cost, timeframe, image, category } = req.body;
  let errors = [];
  const validatorErrors = validationResult(req)
  if (validatorErrors.isEmpty()) {
    const task = await db.Task.create({
      description,
      cost,
      image,
      timeframe,
      category,
      completed: false
    })
    return res.redirect('/')
  } else {
    const errors = validatorErrors.array().map(error => error.msg)
  }

  res.render("view-tasks", {
    title: "Duckit List",
    errors,
    csrfToken: req.csrfToken(),
    task
  })

}));



module.exports = router;
