const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hi Akshay!! ')
})

app.listen(3001);