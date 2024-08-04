import { MovieBarChartProps } from './interfaces';

export const getLastReviewsChartValues = (ratings: MovieBarChartProps[]) => {
   return ratings
      .filter((rating) => rating.author_details.rating !== null)
      .map((rating) => {
         return {
            name: rating.created_at,
            rating: rating.author_details.rating,
         };
      });
};
