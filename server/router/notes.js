const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        router: 'notes'
    };
    res.json(obj);
    console.log(req.body)
})

module.exports = router;