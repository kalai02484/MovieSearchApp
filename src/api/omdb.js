import axios from 'axios';

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query, page = 1, type = "") => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
  );
  return response.data;
};
