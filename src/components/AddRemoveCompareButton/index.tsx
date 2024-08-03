import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import MovieService from '../../services/movie-service';

import { addRemoveMovie } from '../../store/slices/moviesToCompare/slice';
import { SelectedMovieId } from './interfaces';
import CIcon from '@coreui/icons-react';
import cx from 'classnames';
import { cilGraph } from '@coreui/icons';

import styles from './style.module.css';
import { RootState } from '../../store/store';
import { isMovieInList } from '../../helpers/isMmovieInList';

const AddRemoveCompareButton = ({ selectedMovieId }: SelectedMovieId) => {
   const dispatch = useDispatch();

   const { data: dataMovie } = useQuery({
      queryKey: ['getMovie', selectedMovieId],
      queryFn: async () => MovieService.getMovieById(selectedMovieId),
      enabled: !!selectedMovieId,
   });

   const moviesToCompareState = useSelector(
      (state: RootState) => state.moviesToCompare.values,
   );

   const isMovieInCompareState =
      moviesToCompareState &&
      isMovieInList(selectedMovieId, moviesToCompareState);

   console.log('isMovieInCompareState', isMovieInCompareState);

   const handleAddMovieToCommpare = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (dataMovie) {
         dispatch(addRemoveMovie(dataMovie));
      }
   };

   return (
      <button
         onClick={handleAddMovieToCommpare}
         className={styles.addRemoveComparedMoviesButton}
      >
         <CIcon
            icon={cilGraph}
            height={20}
            className={cx({
               [styles.addRemoveComparedMoviesIconRed]: isMovieInCompareState,
            })}
         />
      </button>
   );
};

export default AddRemoveCompareButton;
