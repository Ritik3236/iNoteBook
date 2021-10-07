const DB = require('./db');
const express = require('express');

 DB();
const app = express();
port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello Bosdik")
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

