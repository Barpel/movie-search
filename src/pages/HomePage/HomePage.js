import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import './HomePage.scss';

import MovieList from '../../components/MovieList/MovieList';

import CustomError from '../../components/CustomError/CustomError';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@inject('store')
@observer
class HomePage extends Component {
    movieStore = this.props.store.movieStore

    render() {
        return (
            <section className="home-page">
                {
                    !this.movieStore.movies.length &&
                    <React.Fragment>
                        <h1>
                            Welcome to
                            &nbsp;
                            <span>
                                <FontAwesomeIcon icon={faFilm} />
                                Movie Search!
                                </span>
                            <br />
                            <NavLink to="/about">Learn more</NavLink> about what you can do here or search for your favorite movie!
                        </h1>
                    </React.Fragment>
                }
                {
                    this.movieStore.movies &&
                    < MovieList movies={this.movieStore.movies} />
                }
                {
                    this.movieStore.movies.length > 0 &&
                    <React.Fragment>

                        <button
                            onClick={this.movieStore.loadMoreMovies}
                            className={
                                this.movieStore.canShowMoreMovies
                                    ? 'load-more'
                                    : 'load-more disabled'
                            }
                        >Load More</button>
                        <button onClick={this.movieStore.clearSearch} className="clear-search-btn">Clear Search</button>
                    </React.Fragment>
                }
                {
                    this.movieStore.errorStatus.show &&
                    <CustomError txt={this.movieStore.errorStatus.txt} />
                }
            </section>
        )
    }
};

export default HomePage;