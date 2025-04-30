const { MongoClient } = require('mongodb');
const url = require('/url.js'); // Connection URL
const { data } = require('./utils/constants.js'); 


const client = new MongoClient(url);

// Database Name
const dbName = 'Test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');


  // Create Operations
  // const insertResult = await collection.insertMany(data);
  // console.log('Inserted documents =>', insertResult);

  // Update Operations
  //  const updateData = await collection.updateMany({Number: '8544098398'}, {$set: {Number: '12345'}});
  // const updateData = await collection.updateOne({ Number: '12345' }, { $set: { Number: '85440' } });
  // const updateData2 = await collection.updateOne({ Number: '12345' }, { $set: { Number: '85441' } });
  // console.log('Updated documents =>', updateData, updateData2);

  // Delete Operations
  const deleteData = await collection.deleteOne({Number: '85441'});
  console.log('Deleted documents =>', deleteData);
  

  // Read Operations

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());