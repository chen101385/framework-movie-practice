//ISSUE: when to use ES6 vs es5 Imports?

const api_key = require('../client/config/moviedb.js'); 
// import {api} from '../client/config/moviedb'; 
// import axios from 'axios';
const axios = require('axios');
//automatically adds .js



// example: https://api.themoviedb.org/3/movie/550?api_key=2e857d02fa69bdba8068e436d8b1ef8d

//https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test

//get request for data

module.exports.getMovieData = (callback) => {

    axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
        params: {
            api_key: api_key.api
        }
    })
    .then((response) => {
        // console.log(response)
        callback(null, response.data.results)
    })
    .catch((error) => {
        // console.log(error)
        callback(error, null)}
    )
    //.title
    //.overview
}

//parse data from API that will be able to be passed into SQL
  //send into add.entry(database)
    //make sure to parse data beforehand

module.exports.parseData = (movieData) => {
    // console.log('parsed movie data', movieData)
    //array of movie objects
  return movieData.map((movie) => {
      //return an array of arrays for each movie, each with 3 arguments
      return [
          movie.id,
          movie.title,
          movie.overview
      ]
  })
}