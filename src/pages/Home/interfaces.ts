import { GetMoviesReturn } from '../../services/MovieService/types';

export interface HomePageLoaderData {
   upcomingMovies: GetMoviesReturn;
   nowPlayingMovies: GetMoviesReturn;
   popularMovies: GetMoviesReturn;
}
