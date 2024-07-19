import api from "../api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMovies = async (params: Record<any, any>) => {
	const res = await api.get(
		`order-api/orders`,
		params,
	);

	return res;
};

const SearchService = {
	getMovies,
};

export default SearchService;