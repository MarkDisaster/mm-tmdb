import { MouseEvent } from 'react';
import { SelectedMovieId } from './interfaces';
import CIcon from '@coreui/icons-react';
import { cilHeart } from '@coreui/icons';

import styles from './style.module.css';
import { MEDIA_TYPE } from '../../services/account-service/types';
import AccountService from '../../services/account-service';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';

const AddToFavoritesButton = ({ selectedMovieId }: SelectedMovieId) => {
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);

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
      );
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
