# My Experience with the project

## CSV file

I searched for a package to work with csv files and found [CSV for Node.js](http://csv.adaltas.com), [Git repo](https://www.npmjs.com/package/csv).

I used only the csv-parse, `npm install csv-parse`

## Stream for reading and process a file

I used [Node.js documentation](https://nodejs.org/api/stream.html) and others tutorials

## Struggling to work with big dataset

I couldn't solve how to process all the file. I found it a little bit advanced for me. And so, how to be horizontal scalable. That I understand connect other server to share the processing of the file.

So I decided to use a short piece of the file (only 1,000 rows) to show my code, in two versions (1. working in the memory and 2. with a DB - Firebase).

## Saving the processed data

I decided to save it in a JSON file, when working in the file sytem, with the package [jsonfile](https://www.npmjs.com/package/jsonfile), `npm install --save jsonfile`.

## Docker

It's my first contact with Docker. I've had only some overview.

I used this [link](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) for Node.js to get into Docker.

- (<https://nodejs.org/en/docs/guides/nodejs-docker-webapp/>)