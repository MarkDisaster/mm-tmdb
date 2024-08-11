import { CContainer, CRow } from '@coreui/react';

import MoviesCarousel from '../../components/MoviesCarousel';
import { useQueries } from '@tanstack/react-query';
import MovieService from '../../services/MovieService';
import MoviePanel from '../../components/MoviePanel';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './style.module.css';
import { CAROUSEL_SETTINGS } from './constants';

const HomePage = () => {
   const getUpcomingMoviesParams = {
      page: 1,
      language: 'en-US',
      region: 'US',
   };

   const [
      { data: upcomingMovies },
      { data: nowPlayingMovies },
      { data: popularMovies },
   ] = useQueries({
      queries: [
         {
            queryKey: ['upcomingMovies'],
            queryFn: async () =>
               MovieService.getUpcomingMovies(getUpcomingMoviesParams),
         },
         {
            queryKey: ['nowPlayingMovies'],
            queryFn: async () =>
               MovieService.getNowPlayingMovies(getUpcomingMoviesParams),
         },
         {
            queryKey: ['popularMovies'],
            queryFn: async () =>
               MovieService.getPopularMovies(getUpcomingMoviesParams),
         },
      ],
   });

   return (
      <CContainer
         fluid
         className={styles.container}
         data-testId="cyAliceCarousel"
      >
         <AliceCarousel
            {...CAROUSEL_SETTINGS}
            items={upcomingMovies?.results?.map((movie) => {
               return (
                  <Link href={`/movie/${movie.id}`}>
                     <MoviePanel {...movie} />
                  </Link>
               );
            })}
         />
         <CContainer className={styles.contentContainer}>
            <h3
               className={styles.header}
               data-testId="cyMoviesInTheaterHeader"
            >
               Now in Theatres
            </h3>
            <CRow className={styles.movieRow}>
               <MoviesCarousel movies={nowPlayingMovies?.results ?? []} />
            </CRow>

            <h3
               className={styles.header}
               data-testId="cyPopularMoviesHeader"
            >
               Popular Movies
            </h3>
            <CRow className={styles.movieRowLast}>
               <MoviesCarousel movies={popularMovies?.results ?? []} />
            </CRow>
         </CContainer>
      </CContainer>
   );
};

export default HomePage;
