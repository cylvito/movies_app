import axios from "axios";
import { API_KEY, MOVIE_URL, TVSHOW_URL, SEARCH_URL } from "../config/api_config";

const getMovies = async (category) => {
    const url = MOVIE_URL;
    const api = API_KEY;
    try {
        const movieUrl = `${url}/${category}?api_key=${api}`;
        const response = await axios.get(movieUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

const getTvShows = async (category) => {
    const url = TVSHOW_URL;
    const api = API_KEY;
    try {
        const tvShowUrl = `${url}/${category}?api_key=${api}`;
        const response = await axios.get(tvShowUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching TV shows:", error);
        throw error;
    }
};

const getSearchResults = async (category, query) => {
    const url = SEARCH_URL;
    const api = API_KEY;
    try {
        const searchUrl = `${url}/${category}?query=${query}&api_key=${api}`;
        const response = await axios.get(searchUrl);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error Searching", error);
        throw error;
    }
}

const getItemDetails = async (id) => {
    
}

export { getMovies, getTvShows, getSearchResults };
