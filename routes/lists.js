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
            userId: user,

        },
        order: [["createdAt", "DESC"]]
    });

    res.render("viewlist", { lists, user, csrfToken: req.csrfToken() });
}));

const listValidators = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name for your list")
]

router.get('/new', csrfProtection, (req, res) => {
    res.render("add-list", { csrfToken: req.csrfToken() });
});

router.post('/new', csrfProtection, listValidators, asyncHandler(async (req, res) => {
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

router.get('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const user = req.session.auth.userId

    const lists = await db.List.findAll({
        include: db.Task,
        where: {
            userId: user,

        },
        order: [["createdAt", "DESC"]]
    });

    const listId = parseInt(req.params.id, 10);
    const list = await db.List.findByPk(listId);
    res.render('editlist', {
        title: 'Edit List',
        user,
        lists,
        list,
        csrfToken: req.csrfToken()
    })
}));

router.post('/edit/:id(\\d+)', csrfProtection, listValidators, asyncHandler(async (req, res) => {
    const listId = parseInt(req.params.id, 10);
    const listToUpdate = await db.List.findByPk(listId);
    const { userId, name } = req.body;
    const list = { userId, name };

    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        await listToUpdate.update(list)
        return res.redirect('/')
    } else {
        const errors = validatorErrors.array().map(error => error.msg)
        res.render("editlist", {
            title: "Edit List",
            errors,
            csrfToken: req.csrfToken(),
            list
        })
    }
}));

module.exports = router;
