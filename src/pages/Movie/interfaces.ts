import {
   GetMovieByIdApiReturn,
   GetMovieReviewsReturn,
   GetMoviesReturn,
   GetMovieVideosReturn,
} from '../../services/MovieService/types';

export interface MovieLoaderData {
   movieData: GetMovieByIdApiReturn;
   similiarMovies: GetMoviesReturn;
   movieReviews: GetMovieReviewsReturn;
   movieVideos: GetMovieVideosReturn;
}
