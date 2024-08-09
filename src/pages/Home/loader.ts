import { LoaderFunctionArgs } from 'react-router-dom';
import { queryClient } from '../../main';
import MovieService from '../../services/MovieService';

export const homePageLoader = async ({ params }: LoaderFunctionArgs) => {
   const { id } = params;
   const movieId = Number(id);

   const getHomepageDataParams = {
      page: 1,
      language: 'en-US',
      region: 'US',
   };

   const [upcomingMovies, nowPlayingMovies, popularMovies] = await Promise.all([
      queryClient.fetchQuery({
         queryKey: ['upcomingMovies'],
         queryFn: () => MovieService.getUpcomingMovies(getHomepageDataParams),
      }),
      queryClient.fetchQuery({
         queryKey: ['nowPlayingMovies'],
         queryFn: () => MovieService.getNowPlayingMovies(getHomepageDataParams),
      }),
      queryClient.fetchQuery({
         queryKey: ['popularMovies', movieId],
         queryFn: () => MovieService.getPopularMovies(getHomepageDataParams),
      }),
   ]);

   return {
      upcomingMovies,
      nowPlayingMovies,
      popularMovies,
   };
};
