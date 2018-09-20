
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

// row -> a array with each element of the row
const organizeDataInObj = function(row, obj) {
  
  // Naming the row data
  const userID = row[1];
  const datetime = row[0];
  const os = row[2];
  const device = row[3];

  // Check first if userID already exists and Add new visit
  if(obj[userID]) {

    obj[userID].visits[datetime] = {
      os: Number(os),
      device: Number(device)
    }

    // Or Add the new user
  } else {

    obj[userID] = {
      visits: {
        [datetime]: {
          os: Number(os),
          device: Number(device)
        }
      }
    }

  }

  return obj;
}

exports.organizeDataInObj = organizeDataInObj;