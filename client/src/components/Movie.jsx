import React from 'react';
import MovieDetails from './MovieDetails.jsx'

class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleClick: false
    }
  }

  handleClick() {
    this.props.watched(this.props.movie)
  }

  handleTitleClick() {
    this.setState({ titleClick: !this.state.titleClick })
  }

  render() {
    return (
      <div className="movieTitle">
        <input id="checkBox" type="checkbox" onClick={this.handleClick.bind(this)} />
        <li onClick={this.handleTitleClick.bind(this)}>{this.props.movie.title}</li>
          <MovieDetails toggle={this.state.titleClick} details={this.props.movie.overview} />
      </div>
    )
  }
}

export default Movie;