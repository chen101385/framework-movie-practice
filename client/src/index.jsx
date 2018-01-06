import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';



//index.jsx is root jsx file
//search.jsx will be the search bar
//movielist.jsx will be the movie-list
//movielistentry.jsx will be for individual movie lists 


class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      search: '',
      movieInfo: '',
      movieList: []
    };
  }
  
  fetchMovies() {
    //get request [1] URL, [2] options object
    $.get(`/movies`, {contentType: `application/json`})
      .done((data) => {console.log('movies fetched'); this.setState({movieList: data}); this.setState({ movies: this.state.movieList})})
      .fail((error) => console.log(error))
      //added 2nd setState to .done callback eliminate async issue where function was rendering page w/o updated get data.
  }
  
  //post JSON string data to server
  addMovie(title, info) {
  //create object to post to server
    //add title & info to object
    //pass object into data option in JSON format (required) to be added to server
    $.post({
      contentType: `application/json`,
      url: `/movie`,
      data: JSON.stringify({title: title, overview: info, watched: false}),
      success: () => {console.log('post worked'); this.fetchMovies()}
    })
    .fail((err) => console.log(err.statusText))
  }
  

  // //add movie function that returns movie 
  // addMovie(movie) {
  //   let obj = {}
  //   obj.title = movie.toString()
  //   obj.id = this.state.movies.length + 1
  //   let movieList = this.state.movies
  //   movieList.push(obj)
  //   this.setState({ movies: movieList })
  // }


  search(search) {
    //change this state to reflect movies that match search description
    var filteredMovies = this.state.movies.filter(movie => movie.title === search.toString())
    if (filteredMovies.length) {
      this.setState({
        movies: filteredMovies,
        search: search
      })
    } else {
      alert('no movies found!')
    }
  }


  toggleWatched(movie) {
    //if click watched, add watched property to movie
    //loop through this.state.movies to find one that matches movie; O(n) time complexity
    //set movie status to true

    let movieList = this.state.movies
    for (var i = 0; i < movieList.length; i++) {
      if (movieList[i].title === movie.title) {
        movieList[i].watched = true;
      }
    }
    this.setState({ movies: movieList })
  }

  showWatched() {
    this.setState({ movies: this.state.movies.filter((movie) => movie.watched === true)})
  }

  showInfo(video) {
    this.setState({ movieInfo: this.video.info })
  }

  componentDidMount() {

    // $.ajax({
    //   url: '/load',
    //   method: 'GET',
    //   contentType: 'application/json',
    //   success: () => {
    //     this.fetchMovies();
    //   },
    //   error: console.log('get /load failed')
    // });
    $.get({
      url: `/load`,
      contentType: `application/json`,
      success: () => this.fetchMovies()
    })
    .fail(() => console.log('get /load failed'))
  }

  render() {
    return (
      <div>
        <div className="addMovies">
          <br />
          <AddMovie addMovie={this.addMovie.bind(this)} />
        </div>
        <div className="search">
          <br />
          <Search search={this.search.bind(this)} handleSearchEvent={this.handleSearchEvent} />
          <br />
          <div>
            <button onClick={this.fetchMovies.bind(this)}>Show All Movies</button>
          </div>
          <br />
        </div>
        <button onClick={this.showWatched.bind(this)}>Show Watched Movies</button>
        <br />
        <div>
          <ul className="movieList">
            {this.state.movies.map(item => <Movie
              movie={item}
              watched={this.toggleWatched.bind(this)}
              key={item.id}
            />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<MovieList />, document.getElementById('app'));
