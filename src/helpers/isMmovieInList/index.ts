import { Movie } from './interfaces';

export const isMovieInList = (
   movieId: number,
   moviesData: Movie[],
): boolean => {
   console.log('movieId', movieId);
   console.log('moviesData', moviesData);
   if (!moviesData || !moviesData) return false;
   return moviesData.some((movie) => movie.id === movieId);
};
