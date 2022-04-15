const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const router = express.Router();



/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
});


const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a first name')
    .isLength({ max: 50 })
    .withMessage('First name must not be longer than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a last name')
    .isLength({ max: 50 })
    .withMessage('Last name must not be longer than 50 characters long'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a username')
    .isLength({ max: 50 })
    .withMessage('Username must not be longer than 50 characters long')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided username is already in use by another account');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email')
    .isLength({ max: 255 })
    .withMessage('Email must not be longer than 255 characters long')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password')
    .isLength({ max: 50 })
    .withMessage('Password must not be longer than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    username,
    password,
    hashedPassword,
  } = req.body;

  const user = db.User.build({
    email,
    firstName,
    lastName,
    username,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/home');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('signup', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
    req.session.auth = { userId: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName, email: user.email }
    res.redirect('/home')
  }
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const {
    email,
    userId,
    password,
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        loginUser(req, res, user);
        req.session.auth = { userId: user.id, username: user.username }
        return res.redirect('/home')
      }
    }
    errors.push('Login failed for the provided email address and password');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken(),
  });


}));

router.get('/profile', csrfProtection, (req, res) => {
  res.render('profile', {
    title: 'Profile',
  });
});

router.get('/profile/edit', asyncHandler(async (req, res) => {
  res.render('profile-edit', { title: "Edit Profile" })
}));

router.post('/profile/edit', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  let currUser = req.session.auth.userId;

  const user = await db.User.findByPk(currUser);

  user.username = req.body.username;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.save();

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    // loginUser(req, res, user);
    res.redirect('/users/profile');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('profile-edit', {
      title: 'Edit Profile',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
    req.session.auth = { userId: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName, email: user.email }
    res.redirect('/users/profile/edit')
  }
}));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});


// router.get('/:userId(\\d+)', asyncHandler(async (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = res.locals.user;
//   const userProfile = await db.User.findByPk(id);

//   res.render('homepage', {
//     user,
//     userProfile
//   })
// }))

router.post('/login', csrfProtection, asyncHandler(async (req, res) => {
  const user = await db.User.findOne({ where: { email: 'demo@user.com' } })
  if (!user) {
    const demoUser = await db.User.build({
      username: 'DemoUser',
      email: 'demo@user.com',
      hashedPassword: bcrypt.hashSync('DemoU$er1', 10)
    })
    await demoUser.save()
    loginUser(req, res, demoUser)
  } else {
    loginUser(req, res, user)
  }
  res.redirect('/home')
}))

module.exports = router;
