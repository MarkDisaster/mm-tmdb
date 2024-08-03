import api from '../api';
import {
   GetMovieByIdApiReturn,
   GetUpcommingMoviesParams,
   GetUpcommingMoviesReturn,
} from './types';

const getMovieByIdParams = {
   language: 'en-US',
};

const getMovieById = async (movie_id: number) => {
   const res = await api.get<GetMovieByIdApiReturn>(
      `movie/${movie_id}`,
      getMovieByIdParams,
   );
   return res;
};

const getUpcommingMovies = async (
   getUpcommingMoviesParams: GetUpcommingMoviesParams,
) => {
   const res = await api.get<GetUpcommingMoviesReturn>(
      `movie/upcoming?language=${getUpcommingMoviesParams.language}&page=${getUpcommingMoviesParams.page}`,
      getUpcommingMoviesParams,
   );
   return res;
};

const MovieService = {
   getMovieById,
   getUpcommingMovies,
};

export default MovieService;
