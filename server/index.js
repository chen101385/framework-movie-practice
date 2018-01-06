const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
//automatically searches for index.js in directory (below)
const movies = require('../database');
const movieAPI = require('../lib/movieAPI');

//in node, global === window;

//MIDDLEWARE: next() is always required, unless @ end request/response cycle.  (i.e. res.send(), res.json(), res.end())
  //

//run bodyParser middleware to automatically parse req.body - ready to use;
app.use(bodyParser.json({ type: `application/json` }));

//use express.static [built-in] middleware to serve up static assets from root directory
//put static assets (ie pictures, client-side index.HTML, CSS) in dist folder
  //assets will be presented to the user
app.use(express.static(path.join(__dirname, '../client/dist')));



//set up GET route /load
  //this get function will run ONLY IF url ends in /load
app.get('/load', (req, res, next) => {
    movieAPI.getMovieData((err, movieDataFromAPI) => {
        //IMPORTANT: console.log response sent from get request to find path to desired data
        // console.log(movieDataFromAPI);
        if (err) {
            //set response object status to 500
            //send respond object with error passed in
            res.status(500).send({ error: err });
        }
        console.log('right before invoking addMultipleEntries')
        //changed from movieDataFromAPI.data.results
        movies.addMultipleEntries(movieDataFromAPI, (err) => {
            if (err) {
                res.status(500).send({ error: err });
            } else {
                //no next() needed;
                res.status(200).end();
            }
        })
    });
});
//create movies route
app.get('/movies', (req, res) => {
    movieAPI.getMovieData((err, movieDataFromAPI) => {
        //IMPORTANT: console.log response sent from get request to find path to desired data
        // console.log(movieDataFromAPI);
        if (err) {
            //set response object status to 500
            //send respond object with error passed in
            res.status(500).send(err);
        } else {
            //changed from movieDataFromAPI.data.results
              //no next() needed
            res.status(200).json(movieDataFromAPI);
        }
    })
})
//changed from /movies to /movie route 
app.post('/movie', (req, res) => {
    let title = req.body.title;
    let overview = req.body.overview;
    
    if (!req.body) {
        res.status(400).send({error: 'Bad Request'});
    }
    movies.addEntry(title, overview, (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            //used to be res.json(results)
              //post does not return results in response object
                //no next() needed
            res.status(201).end();
        }
    })
})

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') })
