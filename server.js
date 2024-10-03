

// //Basic endpoint to say Hello World
// app.get('', (req, res) => {
//     res.send("Hello World,Oladele is writing some code,i was in canada yesterday")
// })


// importing the neccessary dependancies
const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')


const app = express()
dotenv.config()


// create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// test the connection
db.connect((err) => {
    // connection not successful
    if (err) {
        return console.log("Error connecting to MySQL", err)
    }

    // connection successful
    console.log("MySQL connection successful")
})


// ejs templating configuration
// ejs for the assignment is not necessary
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Question 1
app.get('/data', (req, res) => {
    // Retrieve data from database 
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Retrieving data')
        } else {
            //Display the records to the browser 
            res.render('data', { results: results });
        }
    });
});
// get patients
// '/get-patient' is a route
app.get('/get-patients', (req, res) => {
    const getPatients = "SELECT * FROM patients"

    db.query(getPatients, (err, results) => {
        // have an error
        if (err) {
            return res.status(500).send("Failed to fetch the patients")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})

// Question 2
app.get('/data', (req, res) => {
    // Retrieve data from database 
    db.query('SELECT * FROM providers', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Retrieving data')
        } else {
            //Display the records to the browser 
            res.render('data', { results: results });
        }
    });
});
// get providers
// '/get-providers' is a route
app.get('/get-providers', (req, res) => {
    const getProviders = "SELECT * FROM providers"

    db.query(getProviders, (err, results) => {
        // have an error
        if (err) {
            return res.status(500).send("Failed to fetch the providers")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})

// Question 3
app.get('/data', (req, res) => {
    // Retrieve data from database 
    db.query('SELECT first_name FROM patients', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Retrieving data')
        } else {
            //Display the records to the browser 
            res.render('data', { results: results });
        }
    });
});
// get patients
// '/get-patient' is a route
app.get('/get-patients', (req, res) => {
    const getPatients = "SELECT first_name FROM patients"

    db.query(getPatients, (err, results) => {
        // have an error
        if (err) {
            return res.status(500).send("Failed to fetch the first_name from patients")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})


// Question 4
app.get('/data', (req, res) => {
    // Retrieve data from database 
    db.query('SELECT provider_specialty FROM providers', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Retrieving data')
        } else {
            //Display the records to the browser 
            res.render('data', { results: results });
        }
    });
});
// get providers
// '/get-providers' is a route
app.get('/get-providers', (req, res) => {
    const getProviders = "SELECT provider_specialty  FROM providers"

    db.query(getProviders, (err, results) => {
        // have an error
        if (err) {
            return res.status(500).send("Failed to fetch the provider_specialty from providers")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})


// delcare the port and listen to the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
