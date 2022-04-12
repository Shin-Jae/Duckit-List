const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET splash page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

router.get('/home/:userId(\\d+)', asyncHandler(async (req, res) => {
  const user = await db.User.findByPk(req.params.userId)
  res.render('homepage', {
    title: `Welcome ${user.username} !`,
    user,
  })
}))

module.exports = router;
