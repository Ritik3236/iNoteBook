const { body, validationResult } = require('express-validator');
const User = require('../models/userSchema');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(req.body);
})

// ? Create a new user using Auth/createUser Api, No login Required.
router.post('/createUser',

    // Validation.
    body('name', 'Enter a valid name').isLength({ min: 4 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a strong password').isLength({ min: 5 }),

    async (req, res) => {
        // If there is any Validation error, abort the request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            // Check if user with same Email already exists.
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(403).send("Sorry a user with this Email is already exists")
            };
            // Create a new user.
            const salt = await bcryptjs.genSalt(5);
            const secPass = await bcryptjs.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
            console.log(authToken);
            res.status(200).send(user)
        } catch (err) {
            console.log(err)
            res.status(500).send('Some Error Occurred')
        }
    })

module.exports = router;