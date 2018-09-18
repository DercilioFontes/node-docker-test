'use strict';

const express = require('express');

// Require the processing of the csv file
const data = require('./process-data.js');
data.processData();

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