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

router.get('/new', function (req, res) {
  res.render("create-task");
});

router.post('/', function (req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
