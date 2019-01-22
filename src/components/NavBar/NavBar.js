import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './NavBar.scss';

import { observer, inject } from 'mobx-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilm, faBars } from '@fortawesome/free-solid-svg-icons';
import { observable } from 'mobx';

@inject('store')
@observer
class NavBar extends Component {
    
    @observable
    menuOpen = false;

    searchMovies = ev => {
        ev.preventDefault();
        let searchTerm = ev.target.search.value;
        if (this.props.location.pathname !== '/') {
            this.props.history.push('/')
        }
        this.props.store.movieStore.validateSearch(searchTerm)
            ? this.props.store.movieStore.fetchMovies(searchTerm)
            : this.props.store.movieStore.toggleError('Search term must contain more than 3 characters');
        ev.target.search.value = '';
    }

    toggleMenu = ()=>{
        this.menuOpen = !this.menuOpen
    }


    render() {

        return (
            <header className="nav-bar" >
                <div>
                    <h2 className="logo">
                        <NavLink to="/" >
                            <FontAwesomeIcon icon={faFilm} />
                            Movie Search
                        </NavLink>
                    </h2>
                    <form onSubmit={this.searchMovies}>
                        <input placeholder="Search" name="search" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                <nav>
                    <button className="menu-btn" onClick={this.toggleMenu}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <ul className={
                        this.menuOpen
                        ?'show'
                        :'hide'
                    }>
                        <li>
                            <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
};

export default withRouter(NavBar);