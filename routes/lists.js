const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const router = express.Router();


router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const tasks = await db.Task.findAll();
  res.render("viewlist", {tasks, csrfToken: req.csrfToken()});
}));

router.get('/new', csrfProtection, (req, res) => {
  res.render("addtolist", {csrfToken: req.csrfToken()});
});

const taskValidators = [
  check("description")
  .exists({ checkFalsy: true})
  .withMessage("Please provide a description of your goal")
]

router.post('/new', csrfProtection, taskValidators, asyncHandler(async (req, res) => {
  const { description, cost, timeframe, image, category } = req.body;
  const userId = parseInt(req.session.auth.userId)
  console.log("******************",userId)
  let errors = [];
  const validatorErrors = validationResult(req)
  if (validatorErrors.isEmpty()) {
    const task = await db.Task.create({
      userId,
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



module.exports = router;
