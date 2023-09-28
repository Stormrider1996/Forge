// require express module
const express = require('express');

// create a router object
const router = express.Router();

//require body-parser module
const bodyParser = require('body-parser');

//use body-parser middleware to parse the request bodies
router.use(bodyParser.urlencoded({ extended: false }));

// rquire db.js file
const db = require('../database/db');

// Get route for /users - show all users
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.render('users', {
            users: result
        });
    });
});

//Post route for /users - add new user
router.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users SET ?', { name, email }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/users');
    });
}



