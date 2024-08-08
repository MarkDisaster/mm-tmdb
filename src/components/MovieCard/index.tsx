import {
   CCard,
   CCardBody,
   CCardImage,
   CCardText,
   CCardTitle,
   CContainer,
   CRow,
} from '@coreui/react';

import { MovieCardProps } from './interfaces';
import { TMDB_IMG_URI } from '../../services/constants';
import MovieScore from '../MovieScore';

import styles from './style.module.css';
import AddRemoveFavoritesButton from '../AddRemoveFavoritesButton';
import AddRemoveCompareButton from '../AddRemoveCompareButton';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({
   id,
   poster_path,
   title,
   original_title,
   popularity,
   vote_average,
}: MovieCardProps) => {
   const navigate = useNavigate();
   const handleOnClickMovie = (id: number) => navigate(`/movie/${id}`);

   return (
      <CCard
         className={styles.movieCard}
         onClick={() => handleOnClickMovie(id)}
      >
         <CContainer className={styles.movieCardButtons}>
            <AddRemoveCompareButton selectedMovieId={id} />
            <AddRemoveFavoritesButton selectedMovieId={id} />
         </CContainer>

         <CCardImage
            orientation="top"
            src={`${TMDB_IMG_URI}${poster_path}`}
         />
         <CRow className={styles.movieScore}>
            <MovieScore vote_average={vote_average} />
         </CRow>
         <CCardBody className={styles.movieCardImage}>
            <CCardTitle className={styles.cardTitle}>
               {title ?? original_title}
            </CCardTitle>
            <CCardText>Popularity: {popularity}</CCardText>
         </CCardBody>
      </CCard>
   );
};

export default MovieCard;
