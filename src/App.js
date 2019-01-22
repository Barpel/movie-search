import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import NavBar from './components/NavBar/NavBar';

import HomePage from './pages/HomePage/HomePage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import AboutPage from './pages/AboutPage/AboutPage';



@inject('store')
@observer
class App extends Component {

  searchMovies = ev => {
    ev.preventDefault();
    let searchTerm = ev.target.search.value;
    this.props.store.movieStore.validateSearch(searchTerm)
      ? this.props.store.movieStore.fetchMovies(searchTerm)
      : this.props.store.movieStore.toggleError('Search term must contain more than 3 characters');
    ev.target.search.value = '';
  }


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movie/:movieId" component={MovieDetails} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
