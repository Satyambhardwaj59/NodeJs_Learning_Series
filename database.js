// const { MongoClint } = require("mongodb");

// const url = "mongodb+srv://satyambhardwaj59:G5qeD7MK14UZsjGb@satyamdb.mwmkzy1.mongodb.net/";

// // satyambhardwaj59 -- user name
// // G5qeD7MK14UZsjGb -- password
// // satyamdb.mwmkzy1.mongodb.net -- cluster name

// const clint = new MongoClint(url);
// const dbName = "Test";

// async function main() {
//     await clint.connect();
//     console.log("Connected to MongoDB server successfully");
//     const db = clint.db(dbName);
//     const collection = db.collection("User");
//     return done;
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => clint.close());


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://satyambhardwaj59:G5qeD7MK14UZsjGb@satyamdb.mwmkzy1.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'Test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());