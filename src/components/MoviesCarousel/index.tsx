import { CRow } from '@coreui/react';
import MovieCard from '../MovieCard';

import styles from './style.module.css';
import { MoviesCarouselProps } from './iinterfaces';

const MovieCarousel = ({ movies }: MoviesCarouselProps) => {
   return (
      <div data-testId="cyMovieCarousel">
         <CRow className={styles.movieRow}>
            {movies.length > 0 ? (
               movies.map((movie, index) => {
                  if (!movie.poster_path) return;
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
      </div>
   );
};

export default MovieCarousel;
