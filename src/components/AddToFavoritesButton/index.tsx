import { MouseEvent } from 'react';
import { SelectedMovieId } from './interfaces';
import CIcon from '@coreui/icons-react';
import { cilHeart } from '@coreui/icons';
import { useQueryClient } from '@tanstack/react-query';

import { MEDIA_TYPE } from '../../services/account-service/types';
import AccountService from '../../services/account-service';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';

import styles from './style.module.css';

const AddToFavoritesButton = ({ selectedMovieId }: SelectedMovieId) => {
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);

   const queryClient = useQueryClient();

   const handleAddMovieToFavorites = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const addMovieToFavoritesParams = {
         media_id: selectedMovieId,
         media_type: MEDIA_TYPE.MOVIE,
         favorite: true,
      };

      AccountService.addRemoveMovieFavorites(
         addMovieToFavoritesParams,
         sessionId,
      ).then(() => {
         queryClient.invalidateQueries({ queryKey: ['getFavoriteMovies'] });
      });
   };

   return (
      <button
         onClick={handleAddMovieToFavorites}
         className={styles.addToFavoritesButton}
      >
         <CIcon
            icon={cilHeart}
            height={20}
         />
      </button>
   );
};

export default AddToFavoritesButton;
