var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

// const db = require('../db/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
