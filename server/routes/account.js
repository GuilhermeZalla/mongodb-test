const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async(req, res) => {
    try {
        let user = await User.find({});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    let { username, password } = req.body;
    try {
        let user = await User.create({ username, password })
        res.json(user);
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = router;