const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');


const port = 8081;

var app = module.exports = express();

app.use(bodyParser.json());
// app.use(cors());
app.use(express.static('build'));

// var controller = require('./controller');

app.listen(port, function(){
  console.log("Successfully listening on :",port)
})
