const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const router = express.Router();

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    const user = req.session.auth.userId



    const lists = await db.List.findAll({
        include: db.Task,
        where: {
            userId: user
        }

    });
    console.log('+++++++', lists)
    // let listsId = [];
    // for (list of lists) {

    //     listsId.push(list.id);
    // }
    // const tasks = await db.Task.findAll({ where: { listId: listsId } });

    res.render("viewlist", { lists, user, csrfToken: req.csrfToken() });
}));

const taskValidators = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name for your list")
]

router.get('/new', csrfProtection, (req, res) => {
    res.render("add-list", { csrfToken: req.csrfToken() });
});

router.post('/new', csrfProtection, taskValidators, asyncHandler(async (req, res) => {
    const { name } = req.body;
    const userId = req.session.auth.userId

    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        const list = await db.List.create({
            name,
            userId,
        })
        return res.redirect('/lists')
    } else {
        const errors = validatorErrors.array().map(error => error.msg)
        res.render("add-list", {
            title: "Add to list",
            errors,
            csrfToken: req.csrfToken(),
            list
        })
    }


}));

module.exports = router;
