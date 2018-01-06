//require mysql

const mysql = require('mysql');
const movieAPI = require('../lib/movieAPI.js');


var connection = mysql.createConnection ({
    //host - use local
    //user
    //pw
    //database
    host: 'localhost',
    user: 'root',
    pw: '',
    database: 'movies'
});

//connect
// connection.connect()

const getAll = function(callback) {
    let query = 'SELECT * FROM movies'
    connection.query(query, (err, results) => {
        if (err) {
            //if error, only pass err into errorback
            callback(err)
        } else {
            //callback = errorback/node-style CB; pass null for err for 'success'
            callback(null, results)
        }
    })
}

const addEntry = function(title, overview, callback) {
    //(?, ?) = title, info
    //pass array of values into connection.query
    let query = `INSERT INTO MOVIES (title, overview)
                values (?, ?)`
    connection.query(query, [title, overview], (err) => {
        //post only has error callback, no results to return
        if (err) {
            //if error, only pass err into errorback
            callback(err)
        } else {
            //callback = errorback/node-style CB; pass null for err for 'success'
            console.log('add entry success')
            callback(null);
        }
    })
}

const addMultipleEntries = function(resultsFromAPI, callback) {
    //(?, ?) = title, info
    //pass array of values into connection.query
    let query = `INSERT INTO MOVIES (id, title, overview)
                values ?`
                //changed (?, ?) to above
    let parsedData = movieAPI.parseData(resultsFromAPI)

    connection.query(query, [parsedData], (err) => {
        if (err) {
            //if error, only pass err into errorback
            callback(err)
        } else {
            //callback = errorback/node-style CB; pass null for err for 'success'
            console.log('add entry success')
            callback(null)
        }
    })
}
//connection.query()
//connection.end()

//ES6 module.exports shorthand, if prop key-name = value-name
//node exports module.exports object 
module.exports = {
    getAll,
    addEntry,
    addMultipleEntries
}