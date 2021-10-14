const { body, validationResult } = require('express-validator');
const User = require('../models/userSchema');
const fetchUser = require('../middleware/fetchUser')
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(req.body);
})

let success = false
// ! ROUTE 1 :
// ? Create a new user using api/Auth/signup Api, No login Required.
router.post('/signup',

    // Validation.
    body('name', 'Enter a valid name').isLength({ min: 4 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a strong password').isLength({ min: 5 }),

    async (req, res) => {
        // If there is any Validation error, abort the request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, message: errors.array() });
        }
        try {
            // Check if user with same Email already exists.
            let user = await User.findOne({ email: req.body.email.toLowerCase() });
            if (user) {
                return res.status(403).send({ message: "Sorry a user with this Email is already exists" })
            };
            // Create a new user.
            const salt = await bcryptjs.genSalt(5);
            console.log(salt)
            const secPass = await bcryptjs.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                password: secPass,
            })
            const data = { user: { id: user.id } };
            const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);

            // ! have to remove user from response
            res.status(201).send({ success: true, user: user, authToken: authToken });
        } catch (err) {
            console.log(err);
            res.status(500).send({ success: false, message: 'Some Error Occurred' });
        }
    })

//! ROUTE 2 :
// ? Login user using api/Auth/login Api, No login Required.
router.post('/login',

    // Validation.
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').exists(),

    async (req, res) => {
        // If there is any Validation error, abort the request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { email, password } = req.body;
            // Check if user with given Email  exists.
            let user = await User.findOne({ email: email.toLowerCase() });
            if (!user) {
                return res.status(403).send({ success: false, message: "Plz try to login with correct credential" });
            };
            // if exists then validate passwords
            const passCompare = await bcryptjs.compare(password, user.password)
            if (!passCompare) {
                return res.status(403).send({ success: false, message: "Plz try to login with correct credential" });
            }
            // generating JWT and sending
            const data = { user: { id: user.id } }
            const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
            // ! have to remove user from field
            res.status(200).send({ success: true, user: user, authToken: authToken });
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: 'Some Error Occurred' })
        }
    })

//! ROUTE 3 :
// ? Get Logged user detail using /Auth/getUser Api, login Required.
router.post('/getuser', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.status(200).send({ user: user });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Some Error Occurred' })
    }
})

module.exports = router;