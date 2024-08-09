import { CContainer, CRow } from '@coreui/react';
import MoviesCarousel from '../../components/MoviesCarousel';
import MoviePanel from '../../components/MoviePanel';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './style.module.css';
import { useLoaderData } from 'react-router-dom';
import { HomePageLoaderData } from './interfaces';
import { carouselResponsive } from './constants';

const HomePage = () => {
   const { upcomingMovies, nowPlayingMovies, popularMovies } =
      useLoaderData() as HomePageLoaderData;

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
            items={upcomingMovies?.results?.map((movie) => {
               return (
                  <Link href={`/movie/${movie.id}`}>
                     <MoviePanel {...movie} />
                  </Link>
               );
            })}
            responsive={carouselResponsive}
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
