const express = require('express');
const Contact = require('../models/Contact'); // ✅ Ensure correct filename

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, name, phoneNumber, comment } = req.body;

        // ✅ Validate required fields
        if (!email || !name || !phoneNumber || !comment) {
            return res.status(400).json({ error: "All fields (email, name, phone number, comment) are required." });
        }

        // ✅ Create a new contact
        const contact = new Contact({ email, name, phoneNumber, comment });
        await contact.save();

        res.status(201).json({ message: "Contact saved successfully", contact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
