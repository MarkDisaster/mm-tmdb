import { MouseEvent } from 'react';
import { SelectedMovieId } from './interfaces';
import CIcon from '@coreui/icons-react';
import { cilHeart } from '@coreui/icons';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { MEDIA_TYPE, SORT } from '../../services/account-service/types';
import AccountService from '../../services/account-service';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { CButton } from '@coreui/react';
import cx from 'classnames';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './style.module.css';
import { isMovieInList } from '../../helpers/isMmovieInList';

const AddRemoveFavoritesButton = ({ selectedMovieId }: SelectedMovieId) => {
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);
   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   const queryClient = useQueryClient();

   const getFavoriteMoviesParams = {
      page: 1,
      language: 'en-US',
      session_id: sessionId,
      sort_by: SORT.ASC,
   };

   const { data: dataFavoriteMovies } = useQuery({
      queryKey: ['getFavoriteMovies'],
      queryFn: async () =>
         AccountService.getFavoriteMovies(getFavoriteMoviesParams),
   });

   const isMovieInFavoritesBoolean =
      dataFavoriteMovies?.results &&
      isMovieInList(selectedMovieId, dataFavoriteMovies.results);

   const handleAddMovieToFavorites = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const addMovieToFavoritesParams = {
         media_id: selectedMovieId,
         media_type: MEDIA_TYPE.MOVIE,
         favorite: !isMovieInFavoritesBoolean,
      };

      AccountService.addRemoveMovieFavorites(
         addMovieToFavoritesParams,
         sessionId,
      ).then(() => {
         queryClient.invalidateQueries({ queryKey: ['getFavoriteMovies'] });
      });
   };

   if (!isUserLoggedIn) return;

   return (
      <CButton
         onClick={handleAddMovieToFavorites}
         className={styles.addToFavoritesButton}
      >
         <CIcon
            icon={cilHeart}
            height={20}
            className={cx({
               [styles.addToFavoritesIconRed]: isMovieInFavoritesBoolean,
            })}
         />
      </CButton>
   );
};

export default AddRemoveFavoritesButton;
