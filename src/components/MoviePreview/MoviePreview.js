import React from 'react';
import './MoviePreview.scss';
import { Link } from 'react-router-dom';

export default props => {
    const { movie } = props
    return (
        <li className="movie-preview">
            {
                movie &&
                <Link to={`/movie/${movie.imdbID}`}>
                    <div>
                        <img src={
                            movie.Poster !== 'N/A'
                                ? movie.Poster
                                : 'http://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png'
                        } alt="Poster" />
                        <h2>{movie.Title}</h2>
                        <h2>Year: {movie.Year}</h2>
                        <span>Details</span>
                    </div>
                </Link>
            }
        </li>
    )
}