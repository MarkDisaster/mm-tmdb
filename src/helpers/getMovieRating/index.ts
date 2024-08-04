import { RatedMovie } from './interfaces';

export const getMovieRating = (
   movieId: number,
   moviesData: RatedMovie[],
): number => {
   if (!moviesData || moviesData.length === 0) return 0;

   const movie = moviesData.find((movie) => movie.id === movieId);

   return movie?.rating ? movie.rating : 0;
};
