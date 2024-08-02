import { CRow } from '@coreui/react';
import MovieCard from '../MovieCard';
import { cilGraph } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import styles from './style.module.css';
import { MoviesCarouselProps } from './iinterfaces';

const MovieCarousel = ({ movies }: MoviesCarouselProps) => {
   return (
      <CRow className={styles.movieRow}>
         {movies.length > 0 ? (
            movies.map((movie, index) => {
               return (
                  <MovieCard
                     {...movie}
                     key={`movieCard-${index}`}
                  />
               );
            })
         ) : (
            <h1 className="text-center">
               Vyhledej film pomocí vyhledávácího pole
               <br />a přidej ho tlačítkem{' '}
               <CIcon
                  icon={cilGraph}
                  height={32}
                  className="mx-2 mt-2"
               />
               k porovnání.
            </h1>
         )}
      </CRow>
   );
};

export default MovieCarousel;
