const DB = require('./db');
var cors = require('cors')
const express = require('express');

DB();
const app = express();
port = process.env.PORT;

app.use(cors());
app.use(express.json());

//Available Routes

app.get('/', (req, res) => { res.send("Hello Ritik") })
app.use('/api/auth', require('./router/auth'))
app.use('/api/notes', require('./router/notes'))


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

