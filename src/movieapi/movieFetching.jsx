
// fetches Movies, Movie detail information from API and provide function for searching movie

import axios from 'axios';


const API_KEY ='d32ff49d23f8a197e2a9ce5fd3abdd92';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category, page = 1) => {
    const response = await axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`);
    return response.data;
};


export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
};


export const searchMovies = async (query, page=1) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
    return response.data;
};