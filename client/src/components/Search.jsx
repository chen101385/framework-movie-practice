import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        //event handler to run everytime word is typed
        //when invoking handleEvent in render (below), bind this to make sure it is changing THIS context's state
        this.state = {
            input: ''
        }
    }
    handleEvent(e) {
        this.setState({input: e.target.value})
    }

    handleClick() {
      this.props.search(this.state.input)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleEvent.bind(this)}
                />
              <button onClick={this.handleClick.bind(this)}>Search Movies</button>
            </div>
        )
    }
}

export default Search;