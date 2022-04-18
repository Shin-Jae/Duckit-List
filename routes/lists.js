const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const router = express.Router();

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const user = req.session.auth

    const lists = await db.List.findAll({
        include: db.Task,
        where: {
            userId: userId,

        },
        order: [["createdAt", "DESC"]]
    });

    res.render("viewlist", { lists, userId, user, csrfToken: req.csrfToken() });
}));

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const listId = parseInt(req.params.id, 10);

    const lists = await db.List.findAll({
        where: {
            userId: userId,
        },
        include: [{ model: db.Task, where: { listId: listId } }],
    });
    console.log(lists.Tasks)
    res.render("viewlist", { lists, userId, csrfToken: req.csrfToken() });
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
        })
    }

}));

router.get('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId

    const lists = await db.List.findAll({
        include: db.Task,
        where: {
            userId: userId,

        },
        order: [["createdAt", "DESC"]]
    });

    const listId = parseInt(req.params.id, 10);
    const list = await db.List.findByPk(listId);
    res.render('editlist', {
        title: 'Edit List',
        userId,
        lists,
        list,
        csrfToken: req.csrfToken()
    })
}));

router.put('/edit/:id(\\d+)', listValidators, asyncHandler(async (req, res) => {
    const list = await db.List.findByPk(req.params.id)
    list.name = req.body.name

    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        await list.save()
        res.json({
            message: 'Success',
            list
        })
    } else {
        const errors = validatorErrors.array().map(error => error.msg)
        res.json({
            message: 'There was an error',
            errors,
        });
    }
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const listId = parseInt(req.params.id, 10);

    const list = await db.List.findByPk(listId);
    await list.destroy();
    res.json({ message: "Success" })
}))

module.exports = router;
