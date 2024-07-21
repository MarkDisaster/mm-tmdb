import { getMovieScore } from './getMovieScore';

export const getMovieScoreValues = (voteAverage: number = 0) => {
   const voteAverageValue = getMovieScore(voteAverage);

   if (voteAverage <= 0) {
      return [
         { name: '', value: 0 },
         { name: '', value: 100 },
      ];
   }

   return [
      { name: '', value: voteAverageValue },
      { name: '', value: 100 - voteAverageValue },
   ];
};
