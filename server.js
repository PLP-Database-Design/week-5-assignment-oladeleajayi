// import our dependencies

const express = require("express");
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

// //Basic end point to say Hello World!
// app.get('/', (req, res) => {
//     console.log('Received request');
//     res.send("Hello World,Oladele is writing some code");
// })

//Start and listen to the server
app.listen(3000, () => {
    console.log('server is running on port 3000...')
});

// // cors and ejs

// // configure environment variables
dotenv.config();


// // create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


// test the connection


//         return console.log("Error connecting to the database: ", err)
//     }

//     // connection is successful
//     console.log("Successfully connected to MySQL: ", db.threadId)
// })


// // this is not important for the assignment
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');



// // retrieve all patients
// app.get('/get-patients', (req, res) => {
//     const getPatients = "SELECT first_name, last_name FROM patients"
//     db.query(getPatients, (err, data) => {
//         // if I have an error
//         if (err) {
//             return res.status(400).send("Failed to get patients", err)
//         }

//         // res.status(200).render('data', { data })
//         res.status(200).send(data)
//     })
// })


// // start and listen to the server
// app.listen(3300, () => {
//     console.log(`server is running on port 3300...`)
// })