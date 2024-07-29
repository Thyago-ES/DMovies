import { Movie } from "../types/movie";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiSearch = import.meta.env.VITE_API_SEARCH_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async (): Promise<Movie[]> => {
	try {
		const response = await axios.get(`${apiUrl}popular?${apiKey}`);
		return response.data.results;
	} catch (error) {
		console.log("Falha no carregamento de filmes: " + error);
		throw error;
	}
};

export const getMovieById = async (id: string = ""): Promise<Movie> => {
	try {
		const response = await axios.get(`${apiUrl}${id}?${apiKey}`);
		return response.data;
	} catch (error) {
		console.log("Falha ao carregar o filme: " + error);
		throw error;
	}
};

export const getSearchedMovies = async (
	query: string | null
): Promise<Movie[]> => {
	try {
		const response = await axios.get(`${apiSearch}?${apiKey}&query=${query}`);
		return response.data.results;
	} catch (error) {
		console.log("Falha ao pesquisar os filmes: " + error);
		throw error;
	}
};
