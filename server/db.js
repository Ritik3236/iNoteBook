const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB_URI = process.env.DATABASE

const DB = () => {
    mongoose.connect(DB_URI).then(() => {
        console.log("DataBase Connection Successful")
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = DB