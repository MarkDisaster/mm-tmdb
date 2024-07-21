export const getMovieScore = (voteAverage: number = 0) => {
   if (voteAverage <= 0) return 0;

   return Math.round(voteAverage * 10);
};
