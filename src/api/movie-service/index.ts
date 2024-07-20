import api from '../api';
import { GetMovieByIdApiReturn } from './types';

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

const MovieService = {
   getMovieById,
};

export default MovieService;
