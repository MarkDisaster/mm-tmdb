import { CAlert, CContainer, CImage, CRow } from '@coreui/react';
import { MoviePanelProps } from './interfaces';

import styles from './style.module.css';
import { TMDB_IMG_ORIGINAL_SIZE_URI } from '../../services/constants';
import MovieScore from '../MovieScore';
import AddRemoveCompareButton from '../AddRemoveCompareButton';
import AddRemoveFavoritesButton from '../AddRemoveFavoritesButton';

const MoviePanel = ({
   id,
   vote_average,
   backdrop_path,
   poster_path,
   original_title,
   release_date,
   overview,
   genres,
}: MoviePanelProps) => {
   return (
      <CRow className={styles.movieRow}>
         <CContainer className={styles.movieImageContainer}>
            <CImage
               align="start"
               src={`${TMDB_IMG_ORIGINAL_SIZE_URI}${backdrop_path ?? poster_path}`}
               width={50}
               className={styles.movieImage}
            />
         </CContainer>
         <CContainer className={styles.movieInfoContainer}>
            {vote_average > 0 && <MovieScore vote_average={vote_average} />}

            <h1 className={styles.movieTitle}>{original_title}</h1>
            <div className={styles.movieTitleContainer}>
               <AddRemoveCompareButton selectedMovieId={id} />
               <AddRemoveFavoritesButton selectedMovieId={id} />
            </div>
            <div className={styles.movieReleaseDateContainer}>
               <h3 className={styles.movieReleaseDate}>{release_date}</h3>
               {genres?.map((genre, index) => (
                  <CAlert
                     color="danger"
                     className={styles.movieInfoGenre}
                     key={`genre-${index}`}
                  >
                     {genre.name}
                  </CAlert>
               ))}
            </div>
            <p className={styles.movieOverView}>{overview}</p>
         </CContainer>
      </CRow>
   );
};

export default MoviePanel;
