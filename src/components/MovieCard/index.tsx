import {
   CButton,
   CCard,
   CCardBody,
   CCardImage,
   CCardText,
   CCardTitle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { MovieCardProps } from './interfaces';
import { TMDB_IMG_URI } from '../../api/constants';

import { cilTrash } from '@coreui/icons';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../stores/moviesToCompare/slice';

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
         style={{ width: '20rem' }}
         className="rc-movie-card p-0 overflow-hidden"
      >
         <CButton
            className="rc-movie-card-delete-button bg-danger"
            onClick={() => dispatch(removeMovie(id))}
         >
            <CIcon
               icon={cilTrash}
               height={35}
               className="text-white"
            />
         </CButton>

         <CCardImage
            orientation="top"
            src={`${TMDB_IMG_URI}${poster_path}`}
         />
         <CCardBody>
            <CCardTitle className="fw-bold">{original_title}</CCardTitle>
            <CCardText>
               Vote: {Math.round(vote_average * 10)} % Popularity: {popularity}
            </CCardText>
         </CCardBody>
      </CCard>
   );
};

export default MovieCard;
