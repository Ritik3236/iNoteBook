const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = data.user;
        next();
    } catch (err) {
        res.status(400).send({error : "Please Authenticate with valid jwt token", err})
    }
}

module.exports = fetchUser;