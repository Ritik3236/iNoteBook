const DB = require('./db');
const express = require('express');

DB();
const app = express();
port = process.env.PORT;

app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello Ritik")
})

//Available Routes
app.use('/api/auth', require('./router/auth'))
app.use('/api/notes', require('./router/notes'))



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

