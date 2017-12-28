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
      movies: [
        { title: 'Mean Girls', info: 'this movie stinks' },
        { title: 'Hackers', info: 'this movie is OK' },
        { title: 'The Grey', info: 'this movie is good' },
        { title: 'Sunshine', info: 'this movie is great'},
        { title: 'Ex Machina', info: 'this movie is excellent' }
      ],
      search: ''
    };
  }
  //add movie function that returns movie 
  addMovie(movie) {
    let obj = {}
    obj.title = movie.toString()
    let movieList = this.state.movies
    movieList.push(obj)
    this.setState({ movies: movieList })
  }


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
      console.log(movieList[i])
      if (movieList[i].title === movie.title) {
        movieList[i].watched = true;
      }
    }
    console.log('reached toggleWatched')
    this.setState({ movies: movieList })
    console.log(movieList)
  }

  showWatched() {
    let watchedMovies = this.state.movies.filter((movie) => movie.watched === true )
    this.setState({movies: watchedMovies})
    console.log(watchedMovies)
  }


  render() {
    console.log('why is this rendering')
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
        </div>
        <button onClick={this.showWatched.bind(this)}>Show Watched Movies</button>
        <br />
        <div>
          <ul className="movieList">
            {this.state.movies.map(item => <Movie
              movie={item}
              watched={this.toggleWatched.bind(this)}
            />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<MovieList />, document.getElementById('app'));
