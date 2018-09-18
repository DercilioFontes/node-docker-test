'use strict';

const express = require('express');

// Require the processing of the csv file
// And the userVisits object generated
const data = require('./process-data.js');
const usersVisitsObj = data.processData();

// ## For test ##
console.log(JSON.stringify(usersVisitsObj, null, 2));


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