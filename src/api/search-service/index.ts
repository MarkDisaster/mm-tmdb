import api from "../api";
import { SearchMoviesApiReturn, SearchMoviesParams } from "./types";

const getMovies = async (params: SearchMoviesParams) => {
	const res = await api.get<SearchMoviesApiReturn>(
		`search/movie`,
		params,
	);

	return res;
};

const SearchService = {
	getMovies,
};

export default SearchService;