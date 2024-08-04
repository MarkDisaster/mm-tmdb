import { DATA_TYPE, MovieBarChartProps } from './interfaces';

export const getMoviesBarChartValues = (
   movies: MovieBarChartProps[],
   dataType: DATA_TYPE,
) => {
   return movies.map((movie) => {
      return { name: movie.original_title, value: movie[dataType] };
   });
};
