//Schema: Name, age, ID, gender, address, marital status, Date of Visit

/*
Instructions in Mongo Shell:

Switching to mydb:

use mydb;

Inserting a record:

db.patients.insert({name: "John Doe", age: 45, _id: "P1", gender: "Male", address: "177A, Bleecker Street, London, UK", mstatus: "Married", dov: new Date(2019, 07, 20)});

Finding a record:

db.patients.find({name: "John Doe"});

*/

/* In this code, we generate a patient with _id: "P2" and perform CRUD on it */

/* Dependencies: npm install mongodb */

const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";


async function connectToDatabase() {
    //Connecting to the database

    let client;

    try {
        client = await mongoClient.connect(url);
        console.log("\nConnected to database.");
        await client.close();


    } catch (error) {
        console.error(error);
    }
};


async function insertDocument() {
    //Inserting a record to the collection

    let client;

    try {
        client = await mongoClient.connect(url);
        const dbo = client.db("mydb");

        let record = {
            name: "Amy Santiago",
            age: 38,
            _id: "P2",
            gender: "Female",
            address: "275, Sunset Blvd, Brooklyn, NY",
            mstatus: "Married",
            dov: new Date(2020, 12, 27)
        };

        let result = await dbo.collection('patients').insertOne(record);
        console.log("\nDocument inserted successfully.");
        await client.close();

    } catch (error) {
        console.error(error);
    }
};


async function findDocument() {
    //Finding a record from the collection

    let client;

    try {
        client = await mongoClient.connect(url);
        const dbo = client.db("mydb");

        let result = await dbo.collection('patients').findOne({ _id: "P2" });

        if (result) {
            console.log("\nDocument found:");
            console.log(result);
        } else {    //document does not exist
            console.log("\nDocument not found.");
        }

        await client.close();

    } catch (error) {
        console.error(error);
    }
};


async function updateDocument() {
    //Updating a record in the collection

    let client;

    try {
        client = await mongoClient.connect(url);
        const dbo = client.db("mydb");
        let query = { _id: "P2" };
        let newValues = {   //$set only changes the specific fields
            $set: {
                age: 40,
                address: "99, Bush Avenue, Brooklyn, NY"
            }
        };

        let res = await dbo.collection("patients").updateOne(query, newValues);
        console.log("\nDocument updated successfully.");
        await client.close();

    } catch (error) {
        console.error(error);
    }
};


async function deleteDocument() {
    //Deleting a record in the collection

    let client;

    try {
        client = await mongoClient.connect(url);
        const dbo = client.db("mydb");
        let query = {
            _id: "P2"
        };

        let result = await dbo.collection("patients").deleteOne(query);
        console.log("\nDocument deleted successfully.");
        await client.close();

    } catch (error) {
        console.error(error);
    }
};


//Driver code - Use an IIFE (Immediately Invoked Function Expression)
//To run the async events in a synchronous manner, use async-await logic

(async function driverCode() {
    await connectToDatabase();  //test if connectivity is fine
    await insertDocument();     //insert a new document
    await findDocument();       //find the inserted document
    await updateDocument();     //update the inserted document
    await findDocument();       //find the updated document
    await deleteDocument();     //delete the updated document
    await findDocument();       //find the deleted document
})();

/*
OUTPUT: node --no-warnings Mongo.js

Connected to database.

Document inserted successfully.

Document found:
{
  _id: 'P2',
  name: 'Amy Santiago',
  age: 38,
  gender: 'Female',
  address: '275, Sunset Blvd, Brooklyn, NY',
  mstatus: 'Married',
  dov: 2021-01-26T18:30:00.000Z
}

Document updated successfully.

Document found:
{
  _id: 'P2',
  name: 'Amy Santiago',
  age: 40,
  gender: 'Female',
  address: '99, Bush Avenue, Brooklyn, NY',
  mstatus: 'Married',
  dov: 2021-01-26T18:30:00.000Z
}

Document deleted successfully.

Document not found.
*/
