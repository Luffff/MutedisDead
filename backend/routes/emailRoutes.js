const express = require('express');
const Email = require('../models/Email'); // ✅ Ensure correct filename

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // ✅ Check if email is provided
        if (!req.body.email) {
            return res.status(400).json({ error: "Email is required" });
        }

        const email = new Email({ email: req.body.email }); // ✅ Ensure correct field
        await email.save();
        
        res.status(201).json(email); // ✅ Corrected `user` to `email`
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
