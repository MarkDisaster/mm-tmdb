import { getMovieScore } from './getMovieScore';

export const getMovieScoreValues = (vote_average: number = 0) => {
   const vote_average_value = getMovieScore(vote_average);

   if (vote_average <= 0) {
      return [
         { name: '', value: 100 },
         { name: '', value: 0 },
      ];
   }

   return [
      { name: '', value: 100 - vote_average_value },
      { name: '', value: vote_average_value },
   ];
};
