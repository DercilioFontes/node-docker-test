'use strict';

const express = require('express');
const jsonfile = require('jsonfile');

// Require the processing of the csv file
const data = require('./process-data.js');
data.processData();

// File sources
const fileJSON = './data/data-reduced.json';

// Get json file to a object
let usersVisits = {};
jsonfile.readFile(fileJSON, (err, obj) => {
  if(err) console.error(err);
  usersVisits = obj;

  // ## For test ##
  // console.log(JSON.stringify(usersVisits, null, 2));
});


// Calculate the number of unique visitors



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);