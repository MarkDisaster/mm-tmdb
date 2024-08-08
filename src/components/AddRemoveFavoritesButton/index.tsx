import { MouseEvent } from 'react';
import { SelectedMovieId } from './interfaces';
import CIcon from '@coreui/icons-react';
import { cilHeart } from '@coreui/icons';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { MEDIA_TYPE, SORT } from '../../services/AccountService/types';
import AccountService from '../../services/AccountService';
import LocalStorageService from '../../services/StorageService';
import { LOCAL_STORAGE } from '../../services/StorageService/interfaces';
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
      queryKey: ['getFavoriteMovies', sessionId],
      queryFn: async () =>
         AccountService.getFavoriteMovies(getFavoriteMoviesParams),
      enabled: sessionId?.length > 0,
   });

   const isMovieInFavoritesBoolean =
      dataFavoriteMovies?.results &&
      isMovieInList(selectedMovieId, dataFavoriteMovies.results);

   const handleAddMovieToFavorites = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
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
