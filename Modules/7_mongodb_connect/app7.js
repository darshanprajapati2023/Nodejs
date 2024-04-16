require('dotenv').config()


const MongoClient = require('mongodb').MongoClient;



MongoClient.connect(process.env.MONGO_URL)
    .then((mongoServerConnection) => {

        mongoServerConnection.db(process.env.MONGO_DB).collection("students").find({ name: 'Krushil' }).toArray().then((result) => {

            console.log(result)

        }).catch((e) => console.log(e))

        console.log("CONNECTED")
    }).catch((e) => {
        console.log(e)
    })
