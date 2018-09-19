const fs = require('fs');
const csv = require('csv-parse');
const jsonfile = require('jsonfile');

// Processing the csv file to a organized Object
/** Data Model **/

/*

From csv format

1472711584,125847452640,3,1
1472706440,177938365911,2,1
1472706444,177938365911,2,1
1472706504,177938365911,2,1
1472714474,38099732032,2,1
1472714544,38099732032,2,1
...

To a object or json format, or a NoSQL DB (Document-oriented)

# Model:

users: {
  id :
  visits: {
    datetime: {
      os: 9,
      device: 9
    }
  }
}

# Example:

usersVisits: {
  "125847452640": {
    visits: {
      "1472711584": {
        os: 3,
        device: 1
      },
      ...
    }
  }
  ...
}

*/

// File sources
const fileCSV = './data/data-reduced.csv';
const fileJSON = './data/data-reduced.json';


// Empyt Object to organize the data
const usersVisits = {};

// Pipe Stream to read the csv (row by row) 
// and organize the data in an Object
// and send to DB
const readStream = fs.createReadStream(fileCSV);

const csvStream = csv()
  .on('data', (row) => {

    // Naming the row data
    const userID = row[1];
    const datetime = row[0];
    const os = row[2];
    const device = row[3];

    // Check first if userID already exists and Add new visit
    if(usersVisits[userID]) {

      usersVisits[userID].visits[datetime] = {
        os: Number(os),
        device: Number(device)
      }

      // Or Add the new user
    } else {

      usersVisits[userID] = {
        visits: {
          [datetime]: {
            os: Number(os),
            device: Number(device)
          }
        }
      }

    }
  })
  .on('end', () => {
    console.log("Stream finished.");

    // Save the processed data in a json file (in this version)
    jsonfile.writeFile(fileJSON, usersVisits, (err) => {
      if(err) console.error(err);
    });

    // ## For test ##
    // console.log(JSON.stringify(usersVisits, null, 2));
  })

const processData = () => {
  readStream.pipe(csvStream);
}

// Exports processing of csv
module.exports = {
  processData: processData,
}