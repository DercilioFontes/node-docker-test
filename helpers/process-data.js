const fs = require('fs');
const csv = require('csv-parse');
const csvToObj = require('./process-to-object');
const csvToDB = require('./process-to-db');


const processDataCSV = async function(inputfileCSV) {

  // Empyt Object to organize the data
  let usersVisits = {};

  // Pipe Stream to read the csv (row by row) 
  // and organize the data in an Object
  // and send to DB
  const readStream = fs.createReadStream(inputfileCSV);

  const csvStream = csv()
    .on('data', (row) => {

      // Set data to a object
      usersVisits = csvToObj.organizeDataInObj(row, usersVisits);

      // Set data to a DB
      csvToDB.organizeDataInDB(row);
      
    })
    .on('end', () => {
      console.log("Stream finished.");

      // ## For test ##
      // console.log(JSON.stringify(usersVisits, null, 2));
      return usersVisits;
    })

  await readStream.pipe(csvStream);
}

exports.processDataCSV = processDataCSV;
// module.exports = {
//   processDataCSV: processDataCSV
// };