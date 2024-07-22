import {
   CButton,
   CCard,
   CCardBody,
   CCardImage,
   CCardText,
   CCardTitle,
   CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { MovieCardProps } from './interfaces';
import { TMDB_IMG_URI } from '../../api/constants';

import { cilTrash } from '@coreui/icons';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../store/slices/moviesToCompare/slice';
import MovieScore from '../MovieScore';

import styles from './style.module.css';

const MovieCard = ({
   id,
   poster_path,
   original_title,
   popularity,
   vote_average,
}: MovieCardProps) => {
   const dispatch = useDispatch();

   return (
      <CCard
         style={{ width: '200px' }}
         className={styles.movieCard}
      >
         <CButton
            className={styles.cardDeleteButton}
            onClick={() => dispatch(removeMovie(id))}
         >
            <CIcon
               icon={cilTrash}
               height={20}
            />
         </CButton>
         <CCardImage
            orientation="top"
            src={`${TMDB_IMG_URI}${poster_path}`}
         />
         <CRow className={styles.movieScore}>
            <MovieScore vote_average={vote_average} />
         </CRow>
         <CCardBody>
            <CCardTitle className="fw-bold fs-6">{original_title}</CCardTitle>
            <CCardText>Popularity: {popularity}</CCardText>
         </CCardBody>
      </CCard>
   );
};

export default MovieCard;
