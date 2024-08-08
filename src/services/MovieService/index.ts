import api from '../api';
import {
   GetMovieByIdApiReturn,
   GetUpcomingMoviesParams,
   GetMoviesReturn,
   GetSimiliarMoviesParams,
   GetMovieReviewsParams,
   GetMovieReviewsReturn,
   GetMovieVideosParams,
   GetMovieVideosReturn,
   GetNowPlayingMoviesParams,
   AddDeleteMovieRatingParams,
   AddMovieRatingBody,
   AddDeleteMovieRatigReturn,
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

const getUpcomingMovies = async (
   getUpcomingMoviesParams: GetUpcomingMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/upcoming?language=${getUpcomingMoviesParams.language}&page=${getUpcomingMoviesParams.page}`,
   );
   return res;
};

const getNowPlayingMovies = async (
   getNowPlayingMoviesParams: GetNowPlayingMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/now_playing`,
      getNowPlayingMoviesParams,
   );
   return res;
};

const getTopRatedMovies = async (
   getUpcomingMoviesParams: GetUpcomingMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/top_rated?language=${getUpcomingMoviesParams.language}&page=${getUpcomingMoviesParams.page}`,
   );
   return res;
};

const getPopularMovies = async (
   getUpcomingMoviesParams: GetUpcomingMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/popular?language=${getUpcomingMoviesParams.language}&page=${getUpcomingMoviesParams.page}`,
   );
   return res;
};

const getSimiliarMovies = async (
   getUpcomingMoviesParams: GetSimiliarMoviesParams,
) => {
   const res = await api.get<GetMoviesReturn>(
      `movie/${getUpcomingMoviesParams.movieId}/similar?language=${getUpcomingMoviesParams.language}&page=${getUpcomingMoviesParams.page}`,
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

const addMovieRating = async (
   movieId: number,
   addMovieRatingParams: AddDeleteMovieRatingParams,
   addMovieRatingBody: AddMovieRatingBody,
) => {
   const res = await api.post<AddDeleteMovieRatigReturn>(
      `movie/${movieId}/rating`,
      addMovieRatingBody,
      addMovieRatingParams,
      undefined,
   );

   return res;
};

const deleteMovieRating = async (
   movieId: number,
   addMovieRatingParams: AddDeleteMovieRatingParams,
) => {
   const res = await api.delete<AddDeleteMovieRatigReturn>(
      `movie/${movieId}/rating`,
      addMovieRatingParams,
   );

   return res;
};

const MovieService = {
   getMovieById,
   getUpcomingMovies,
   getNowPlayingMovies,
   getTopRatedMovies,
   getPopularMovies,
   getSimiliarMovies,
   getMovieReviews,
   getMovieVideos,
   addMovieRating,
   deleteMovieRating,
};

export default MovieService;
