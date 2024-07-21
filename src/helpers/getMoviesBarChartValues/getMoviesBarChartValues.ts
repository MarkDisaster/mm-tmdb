import { MovieBarChartProps } from './interfaces';

export const getMoviesBarChartValues = (movies: MovieBarChartProps[]) => {
   return movies.map((movie) => {
      const numberWithDot = movie.popularity;
      const numberString = numberWithDot.toString();
      const cleanedString = numberString.replace('.', '');
      const finalNumber = Number(cleanedString);
      return { name: movie.original_title, popularity: finalNumber };
   });
};
