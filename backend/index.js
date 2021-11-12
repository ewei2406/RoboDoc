const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express()
app.use(express.static('build'))
app.use(express.json())

app.get("/", (req, res) => {
    res.send('Hello from backend')
})

app.get('/tfjs/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    fs.readFile(`./tfjs/${id}`, (err, obj) => {

        res.send(obj)
        res.end()
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App runnning on port ${PORT}`);
})