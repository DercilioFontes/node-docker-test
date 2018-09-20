'use strict';

const express = require('express');
const processData = require('./helpers/process-data')


// CSV file source
const inputFileCSV = './data/data-reduced.csv';


// Pipe Stream to read the csv (row by row) 
// and organize the data in an Object
// and send to DB
const usersVisits = processData.processDataCSV(inputFileCSV);

// ## For test ##
console.log(JSON.stringify(usersVisits, null, 2));

// Calculate the number of unique visits

// console.log("Number of Unique Users: " + numerOfUniqueVisitors);


// // Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World\n');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);