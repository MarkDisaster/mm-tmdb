import { LoaderFunctionArgs } from 'react-router-dom';
import { queryClient } from '../../main';
import MovieService from '../../services/MovieService';

export const getMovieByIdLoader = async ({ params }: LoaderFunctionArgs) => {
   const { id } = params;
   const movieId = Number(id);

   const getUpcomingMoviesParams = {
      movieId,
      page: 1,
      language: 'en-US',
      region: 'US',
   };

   const getMovieReviewsParams = {
      movieId,
      page: 1,
      language: 'en-US',
   };

   const getMovieVideosParams = {
      movieId,
      language: 'en-US',
   };

   const [movieData, similiarMovies, movieReviews, movieVideos] =
      await Promise.all([
         queryClient.fetchQuery({
            queryKey: ['getMovie', movieId],
            queryFn: () => MovieService.getMovieById(movieId),
         }),
         queryClient.fetchQuery({
            queryKey: ['similiarMovies', movieId],
            queryFn: () =>
               MovieService.getSimiliarMovies(getUpcomingMoviesParams),
         }),
         queryClient.fetchQuery({
            queryKey: ['movieReviews', movieId],
            queryFn: () => MovieService.getMovieReviews(getMovieReviewsParams),
         }),
         queryClient.fetchQuery({
            queryKey: ['movieVideos', movieId],
            queryFn: () => MovieService.getMovieVideos(getMovieVideosParams),
         }),
      ]);

   return {
      movieData,
      similiarMovies,
      movieReviews,
      movieVideos,
   };
};
