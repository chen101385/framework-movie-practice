import React from 'react';
import ReactDOM from 'react-dom';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        //event handler to run everytime word is typed
        //when invoking handleEvent in render (below), bind this to make sure it is changing THIS context's state
        this.state = {
            movieName: ''
        }
    }
    handleEvent(e) {
        this.setState({movieName: e.target.value})
    }

    handleClick() {
      this.props.addMovie(this.state.movieName)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleEvent.bind(this)}
                />
              <button onClick={this.handleClick.bind(this)}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie;