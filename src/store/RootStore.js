import MovieStore from './MovieStore';

export default class RootStore{
    constructor() {
        this.movieStore = new MovieStore(this);
    }
}