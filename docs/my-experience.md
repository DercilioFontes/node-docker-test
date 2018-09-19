# My Experience with the project

## CSV file

I searched for a package to work with csv files and found [CSV for Node.js](http://csv.adaltas.com), [Git repo](https://www.npmjs.com/package/csv).

I used only the csv-parse, `npm install csv-parse`

## Stream for reading and process a file

I used [Node.js documentation](https://nodejs.org/api/stream.html) and others tutorials ([stream-handbook](https://github.com/substack/stream-handbook), [The Basics of Node.js Streams](https://www.sitepoint.com/basics-node-js-streams/)).

## Struggling to work with big dataset

I couldn't solve how to process all the file. I found it a little bit advanced for me. And so, how to be horizontal scalable. I understood that it is the connection of other server to share the processing of the file ([Link](https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases)). I found some article about and some tools, but it will take some time to learn and implement.

So I decided to use a short piece of the file (only 1,000 rows) to make the project go on.

## Saving the processed data in a json file

I decided to save it in a JSON file, when working in the file sytem, with the package [jsonfile](https://www.npmjs.com/package/jsonfile), `npm install --save jsonfile`.

I struggled to make it a asynchronous read of the json file the first time that the server runs. I tried to use promises and async/await to call for diffent js files, but it didn't work very well. I decided to skip it for a moment.

## And with in a database (Firebase)
I saved the data cvs file in a burket and the processed data in the Firestore database.
Package [firebase-admin](https://www.npmjs.com/package/firebase-admin) `npm install --save firebase-admin`


## Docker

It's my first contact with Docker. I've had only some overview.

I used this [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) for Node.js to get into Docker.