const express = require('express');
const router = express.Router();
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
}))

module.exports = router;
