import React from 'react';

import './MovieList.scss';
import MoviePreview from '../MoviePreview/MoviePreview';

export default props => {
    return (
        <ul className="movie-list">
            {
                props.movies &&
                props.movies.map((movie, idx) =>
                    <MoviePreview movie={movie} key={idx} />
                )
            }
        </ul>
    )
}