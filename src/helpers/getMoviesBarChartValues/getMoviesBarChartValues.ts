import { MovieBarChartProps } from './interfaces';

export const getMoviesBarChartValues = (movies: MovieBarChartProps[]) => {
   return movies.map((movie) => {
      return { name: movie.original_title, popularity: movie.popularity };
   });
};
