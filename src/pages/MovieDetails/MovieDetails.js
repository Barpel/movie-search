import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import './MovieDetails.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';

@inject('store')
@observer
class MovieDetails extends Component {
    movieStore = this.props.store.movieStore;

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        await this.movieStore.fetchMovieDetails(movieId);
    }

    render() {
        const { movie } = this.movieStore;
        return (
            <section className="movie-details">
                <Link to="/">Back</Link>
                {
                    movie &&
                    <React.Fragment>
                        <h1>
                            <FontAwesomeIcon icon={faFilm}/>
                            {' ' + movie.Title}
                            <span>({movie.Year})</span>
                        </h1>
                        <h3>
                            <span>{movie.Rated} |</span>
                            <span>{movie.Runtime} |</span>
                            <span>{movie.Genre} |</span>
                            <span>{movie.Released} </span>
                        </h3>
                        <img src={movie.Poster} alt="Poster" />
                        <div className="movie-details-top-right">
                            <h4>
                                <FontAwesomeIcon icon={faStar}/>
                            {' ' + movie.imdbRating} ({movie.imdbVotes})
                        </h4>
                            <h4>
                                Director: {movie.Director}
                                <br />
                                Writer: {movie.Writer}
                            </h4>
                            <h4>Actors: {movie.Actors}</h4>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}`}
                                target="_blank" rel="noopener noreferrer">IMDB</a>
                        </div>
                        <h5>Plot: {movie.Plot}</h5>
                        <h5>
                            Country: <span>{movie.Country}</span>
                        </h5>
                        <h5>
                            Languages: <span>{movie.Language}</span>
                        </h5>
                        <h5>Metascore: {movie.Metascore}</h5>
                        <h5>Box Office: {movie.BoxOffice}</h5>
                        <h5>Awards: {movie.Awards}</h5>
                        <h5>Production: {movie.Production}</h5>
                        <h5>DVD Release: {movie.DVD}</h5>
                        <div className="ratings">
                            <h2>Ratings:</h2>
                            <div>
                                {
                                    movie.Ratings.map((rating, idx) => {
                                        return <h3 key={idx}>{rating.Source} : <FontAwesomeIcon icon={faStar}/> {rating.Value} </h3>
                                    })
                                }
                            </div>
                        </div>
                    </React.Fragment>
                }
                <Link to="/">Back</Link>
            </section>
        )
    }
}

export default MovieDetails;




