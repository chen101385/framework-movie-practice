import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';

//index.jsx is root jsx file
  //search.jsx will be the search bar
  //movielist.jsx will be the movie-list
    //movielistentry.jsx will be for individual movie lists 


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ]
    };
  }

  render() {
    return (
      <div>
        <div class="movies">
          {this.state.movies.map(movie => <Movie movie={movie} />)};
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
