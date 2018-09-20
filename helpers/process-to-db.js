

// Firebase/Firestore DB configurations
const admin = require('firebase-admin');
const serviceAccount = require('../secrets/beta-news-firebase-adminsdk-u0pc3-f53de6e974.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://beta-news.firebaseio.com"
});
const db = admin.firestore();


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

const organizeDataInDB = function(row) {

  // Naming the row data
  const userID = row[1];
  const datetime = row[0];
  const os = row[2];
  const device = row[3];

  // Setting doc reference for Firebase DB
  const docRef = db.collection('users').doc(userID);

  // Check if user doen't exist and add it
  // Or update user data
  docRef.get()
    .then(doc => {
      if(!doc.exists) {
        docRef.set({ 
          visits: {
            [datetime]: {
              os: os,
              device: device
            }
          }
        })
      } else {
        const visitsField = doc.data().visits;
        
        // # For Test
        // console.log(JSON.stringify(doc.data()));
        // console.log("Current: "+ JSON.stringify(visitsField));

        visitsField[datetime] = {
          os: os,
          device: device
        };

        // # For test
        // console.log("New: " + JSON.stringify(visitsField));
        docRef.update({ visits: visitsField});
      }
    })
}

exports.organizeDataInDB = organizeDataInDB;