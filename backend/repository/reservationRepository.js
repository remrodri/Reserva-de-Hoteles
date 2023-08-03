const{MongoClient, ObjectId}=require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'reserva-de-hoteles';

async function getAllReservationsDB(params){
  await client.connect();
  console.log('Connected succesfully to server');
  const db = client.db(dbName);
  const collection = db.collection('reservation');
  return collection.find(params).toArray();
}

async function createReservationDB(data){
  await client.connect();
  const db=client.db(dbName);
  const collection = db.collection('reservation');
  const result = await collection.insertOne(data);
  return result;
}

async function getReservationByIdDB(id){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('reservation');
  const result = await collection.findOne({_id: new ObjectId(id)});
  console.log(result);
  return result;
}

async function updateReservationDB(id,data){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('reservation');
  const result = await collection.updateOne(
    {_id :new ObjectId (id)},
    {$set:data}
    );
  return result;
}

async function removeReservationDB(id){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('reservation');
  const result =await collection.deleteOne ({ _id: new ObjectId( id ) });
  return result;
}

module.exports={
  getAllReservationsDB,
  createReservationDB,
  getReservationByIdDB,
  removeReservationDB,
  updateReservationDB
}