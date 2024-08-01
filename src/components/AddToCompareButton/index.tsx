import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import MovieService from '../../services/movie-service';

import { addMovie } from '../../store/slices/moviesToCompare/slice';
import { SelectedMovieId } from './interfaces';
import CIcon from '@coreui/icons-react';
import { cilGraph } from '@coreui/icons';

import styles from './style.module.css';

const AddToCompareButton = ({ selectedMovieId }: SelectedMovieId) => {
   const dispatch = useDispatch();

   const { data: dataMovie } = useQuery({
      queryKey: ['getMovie', selectedMovieId],
      queryFn: async () => MovieService.getMovieById(selectedMovieId),
      enabled: !!selectedMovieId,
   });

   const handleAddMovieToCommpare = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (dataMovie) {
         dispatch(addMovie(dataMovie));
      }
   };

   return (
      <button
         onClick={handleAddMovieToCommpare}
         className={styles.addToCompareButton}
      >
         <CIcon
            icon={cilGraph}
            height={20}
         />
      </button>
   );
};

export default AddToCompareButton;
