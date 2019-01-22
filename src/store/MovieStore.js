import { observable, action, computed } from 'mobx';
import MovieService from '../services/MovieService';

export default class MovieStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable
    errorStatus = { show: false, txt: '' };

    @observable
    searchTerm = null;

    @observable
    page = 1;

    @observable
    movie = null;

    @observable
    movies = [];

    @computed
    get canShowMoreMovies() {
        return this.movies.length === 10;
    }

    @action.bound
    toggleError(txt) {
        this.errorStatus = { show: true, txt };
        setTimeout(() => {
            this.errorStatus = { show: false, txt: '' };
        }, 4000);
    }

    @action.bound
    loadMoreMovies() {
        if (this.canShowMoreMovies) {
            this.page++;
            MovieService.getMovies(this.searchTerm, this.page)
                .then(res => this.movies = res.Search)
        }
    }

    @action.bound
    fetchMovies(term) {
        this.searchTerm = term;
        this.page = 1;
        MovieService.getMovies(this.searchTerm)
            .then(res => {
                this.movies = res.Search
            });
    }

    @action.bound
    clearSearch() {
        this.movies = [];
    }

    @action
    async fetchMovieDetails(movieId) {
        this.movie = await MovieService.getMovieDetails(movieId);
    }

    @action
    validateSearch(term) {
        return MovieService.validateSearch(term);
    }
}
