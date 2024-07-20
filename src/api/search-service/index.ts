import api from '../api';
import { SearchMoviesApiReturn, SearchMoviesParams } from './types';

const getMoviesByName = async (params: SearchMoviesParams) => {
   const res = await api.get<SearchMoviesApiReturn>(`search/movie`, params);

   return res;
};

const SearchService = {
   getMoviesByName,
};

export default SearchService;
