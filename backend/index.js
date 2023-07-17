const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
const port = 4000; // Choose any available port you want

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login',
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

// Define the endpoint for user registration
app.post('/register', (req, res) => {
    const sql = "INSERT INTO `signup`(`name`, `email`, `phoneno`, `address`, `password`) VALUES (?,?,?,?,?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.password,
    ]
    connection.query(sql, values, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Data add");
    })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
