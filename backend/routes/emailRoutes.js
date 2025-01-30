const express = require('express');
const Email = require('../models/Emails');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const email = new Email(req.body);
        await email.save();
        res.status(201).json(user);
    }
    catch(err) {
        res.status(400).json({ error: err.message});
    }
});

module.exports = router;