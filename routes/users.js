var express = require('express');
var router = express.Router();

const mysql = require('mysql2');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    const connection = mysql.createConnection(
        'mysql://root:root@localhost:3306/police_department'
    );

    connection.addListener('error', (err) => {
        console.log(err);
    });
// A simple SELECT query
    connection.query(
        'SELECT * FROM `users` LIMIT 1800',
        (err, dbResults, fields) => {
            res.send(dbResults);
        }
    );

});

module.exports = router;
