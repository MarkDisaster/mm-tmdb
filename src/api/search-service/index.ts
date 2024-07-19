import api from "../api";
import { SearchMoviesApiReturn } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMovies = async (params: Record<any, any>) => {
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