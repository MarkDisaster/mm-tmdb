import { CContainer, CRow } from '@coreui/react';

import MoviesCarousel from '../../components/MoviesCarousel';
import { useQuery } from '@tanstack/react-query';
import MovieService from '../../services/movie-service';
import MoviePanel from '../../components/MoviePanel';
//import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './style.module.css';

const HomePage = () => {
   const getUpcommingMoviesParams = {
      page: 1,
      language: 'en-US',
      region: 'US',
   };

   const { data: upcommingMovies } = useQuery({
      queryKey: ['upcommingMovies'],
      queryFn: async () =>
         MovieService.getUpcommingMovies(getUpcommingMoviesParams),
   });

   const { data: nowPlayingMovies } = useQuery({
      queryKey: ['nowPlayingMovies'],
      queryFn: async () =>
         MovieService.getNowPlayingMovies(getUpcommingMoviesParams),
   });

   const { data: popularMovies } = useQuery({
      queryKey: ['popularMovies'],
      queryFn: async () =>
         MovieService.getPopularMovies(getUpcommingMoviesParams),
   });

   const responsive = {
      0: { items: 1 },
   };

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         <AliceCarousel
            autoPlay
            mouseTracking={true}
            disableButtonsControls
            infinite
            autoPlayInterval={5000}
            animationType="fadeout"
            items={upcommingMovies?.results?.map((movie) => {
               return (
                  <Link href={`/movie/${movie.id}`}>
                     <MoviePanel {...movie} />
                  </Link>
               );
            })}
            responsive={responsive}
            controlsStrategy="alternate"
         />
         <CContainer className={styles.contentContainer}>
            <h3 className={styles.header}>Now in Theatres</h3>
            <CRow className={styles.movieRow}>
               <MoviesCarousel movies={nowPlayingMovies?.results ?? []} />
            </CRow>

            <h3 className={styles.header}>Popular Movies</h3>
            <CRow className={styles.movieRowLast}>
               <MoviesCarousel movies={popularMovies?.results ?? []} />
            </CRow>
         </CContainer>
      </CContainer>
   );
};

export default HomePage;
