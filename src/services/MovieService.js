import axios from 'axios';

function getMovies(term, page = 1) {
    return axios.get(`http://www.omdbapi.com/?apikey=d777cf78&s=${term}&type=movie&page=${page}`)
        .then(res => res.data);
}

function getMovieDetails(movieId) {
    return axios.get(`http://www.omdbapi.com/?apikey=d777cf78&i=${movieId}`)
        .then(res => res.data);
}

function validateSearch(term) {
    return term.length >= 3;
}

export default {
    getMovies,
    validateSearch,
    getMovieDetails
}
