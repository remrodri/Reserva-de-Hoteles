const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'reserva-de-hoteles';

async function getAllDB(params) {
  await client.connect();
  console.log('Connected succesfully to server');
  const db = client.db(dbName);
  const collection = db.collection('hotel');
  return collection.find(params).toArray();
}

async function getByIdDB(id) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('hotel');
  const result = await collection.findOne({ _id: new ObjectId(id) })
  console.log(result);
  return result;
}

async function createDB(data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('hotel');
  const result = await collection.insertOne(data);
  return result;
}

async function updateDB(id, data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('hotel');
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: data },
  )
  return result;
}

async function removeDB(id) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('hotel');
  const result = await collection.deleteOne(
    { _id: new ObjectId(id) }
  )
}

module.exports = {
  getAllDB,
  getByIdDB,
  createDB,
  updateDB,
  removeDB
}