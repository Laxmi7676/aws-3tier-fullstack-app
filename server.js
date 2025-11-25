const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: "nodejs-db.c1a8uok4i5z6.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "Lakshmi123",
    database: "myappdb"
});

// Check DB connection
db.connect(err => {
    if (err) {
        console.log("DB Connection Failed:", err);
    } else {
        console.log("Connected to RDS MySQL Successfully!");
    }
});

// API route
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.send("Error fetching data");
        } else {
            res.json(results);
        }
    });

