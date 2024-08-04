import api from '../api';
import {
   GetMovieByIdApiReturn,
   GetUpcommingMoviesParams,
   GetMoviesReturn,
   GetSimiliarMoviesParams,
   GetMovieReviewsParams,
   GetMovieReviewsReturn,
   GetMovieVideosParams,
   GetMovieVideosReturn,
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
   const res = await api.get<GetMoviesReturn>(
      `movie/upcoming?language=${getUpcommingMoviesParams.language}&page=${getUpcommingMoviesParams.page}`,
   );
   return res;
};

const getTopRatedMovies = async (
   getUpcommingMoviesParams: GetUpcommingMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/top_rated?language=${getUpcommingMoviesParams.language}&page=${getUpcommingMoviesParams.page}`,
   );
   return res;
};

const getPopularMovies = async (
   getUpcommingMoviesParams: GetUpcommingMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/popular?language=${getUpcommingMoviesParams.language}&page=${getUpcommingMoviesParams.page}`,
   );
   return res;
};

const getSimiliarMovies = async (
   getUpcommingMoviesParams: GetSimiliarMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/${getUpcommingMoviesParams.movieId}/similar?language=${getUpcommingMoviesParams.language}&page=${getUpcommingMoviesParams.page}`,
   );
   return res;
};

const getMovieReviews = async ({
   movieId,
   language,
   page,
}: GetMovieReviewsParams) => {
   const res = await api.get<GetMovieReviewsReturn>(
      `movie/${movieId}/reviews?language=${language}&page=${page}`,
   );
   return res;
};

const getMovieVideos = async ({ movieId, language }: GetMovieVideosParams) => {
   const res = await api.get<GetMovieVideosReturn>(
      `movie/${movieId}/videos?language=${language}`,
   );
   return res;
};

const MovieService = {
   getMovieById,
   getUpcommingMovies,
   getTopRatedMovies,
   getPopularMovies,
   getSimiliarMovies,
   getMovieReviews,
   getMovieVideos,
};

export default MovieService;
