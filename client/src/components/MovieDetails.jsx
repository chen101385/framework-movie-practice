import React from 'react';


class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let details = null;
        if (this.props.toggle) {
            details = this.props.details;
        }

        return (
            <div>
                <li className="movieDetails">{details}</li>
            </div>
        )
    }
}


export default MovieDetails;