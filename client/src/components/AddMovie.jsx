import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        //event handler to run everytime word is typed
        //when invoking handleEvent in render (below), bind this to make sure it is changing THIS context's state
        this.state = {
            movieName: 'movie name',
            movieInfo: 'description'
        }
    }
    handleEventName(e) {
        this.setState({movieName: e.target.value})
    }

    handleEventInfo(e) {
        this.setState({movieInfo: e.target.value})
    }

    handleClick() {
      this.props.addMovie(this.state.movieName, this.state.movieInfo)
      this.setState({movieName: '', movieInfo: ''})
    }

    clearInput() {
      this.setState({movieName: '', movieInfo: ''})
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleEventName.bind(this)}
                    value={this.state.movieName}
                    onClick={this.clearInput.bind(this)}
                />
                <br />
                <br />
                <input
                    type="text"
                    onChange={this.handleEventInfo.bind(this)}
                    value={this.state.movieInfo}
                />
              <button onClick={this.handleClick.bind(this)}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie;