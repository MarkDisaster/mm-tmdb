import { CRow } from '@coreui/react';
import MovieCard from '../MovieCard';

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
            <></>
         )}
      </CRow>
   );
};

export default MovieCarousel;
