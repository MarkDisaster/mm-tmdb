export const getMovieScore = (vote_average: number = 0) => {
   if (vote_average <= 0) return 0;

   return Math.round(vote_average * 10);
};
