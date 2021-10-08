const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB_URI = process.env.DATABASE

const DB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("DataBase Connection Successful")
    } catch (err) {
        console.error(err);
    }
}

module.exports = DB