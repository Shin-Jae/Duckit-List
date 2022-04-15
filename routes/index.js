const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET splash page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Duck it!' });
});

router.get('/home', asyncHandler(async (req, res) => {
  res.render('homepage', {
    title: 'Welcome to Duckit List!',
  })
}))

module.exports = router;
