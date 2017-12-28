import React from 'react';
import ReactDOM  from 'react-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.watched(this.props.movie)
  }

  render() {
    return (
      <div className="movieTitle">
    <input id="checkBox" type="checkbox" onClick={this.handleClick.bind(this)}/>
      <li>{this.props.movie.title}</li>
    </div> 
    )
  }
}

export default Movie;