import { Movie } from './interfaces';

export const isMovieInList = (
   movieId: number,
   moviesData: Movie[],
): boolean => {
   if (!moviesData || !moviesData) return false;
   return moviesData.some((movie) => movie.id === movieId);
};
