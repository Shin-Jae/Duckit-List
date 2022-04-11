const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

// const userValidators = [
//   check('')
// ]


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signup', {
    csrfToken: req.csrfToken(),
    title: 'Sign Up',
    user,
  });
});



module.exports = router;
