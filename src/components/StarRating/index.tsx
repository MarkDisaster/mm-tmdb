import { useState } from 'react';
import { TOTAL_STARS } from './constants';
import { StarRatingProps } from './interfaces';

import styles from './style.module.css';
import AccountService from '../../services/account-service';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { SORT } from '../../services/account-service/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMovieRating } from '../../helpers/getMovieRating';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cx from 'classnames';
import LoginModal from '../LoginModal';
import MovieService from '../../services/movie-service';

const StarRating = ({ movieId }: StarRatingProps) => {
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);
   const [hover, setHover] = useState<number>(0);
   const [isEditing, setIsEditing] = useState<boolean>(false);
   const [selectedStar, setSelectedStar] = useState<number>(0);
   const [isModalVisible, setIsModalVisible] = useState(false);

   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   const queryClient = useQueryClient();

   const getRatedMoviesParams = {
      sort_by: SORT.ASC,
      session_id: sessionId,
      page: 1,
      language: 'en-US',
   };

   const { data: ratedMovies } = useQuery({
      queryKey: ['ratedMovies', movieId],
      queryFn: async () =>
         AccountService.getUserRatedMovies(getRatedMoviesParams),
      enabled: isUserLoggedIn,
   });

   const movieCurrentApiRating = ratedMovies?.results
      ? getMovieRating(movieId, ratedMovies.results)
      : 0;

   const addRatingToMovieParams = {
      session_id: sessionId,
   };

   const handleAddRatingToMovie = () => {
      const currentRatingParams = {
         value: selectedStar,
      };

      MovieService.addMovieRating(
         movieId,
         addRatingToMovieParams,
         currentRatingParams,
      ).then(() => {
         queryClient.invalidateQueries({
            queryKey: ['ratedMovies', movieId],
         });
         setIsEditing(false);
      });
   };

   const handleOnDeleteRating = () => {
      MovieService.deleteMovieRating(movieId, addRatingToMovieParams).then(
         () => {
            queryClient.invalidateQueries({
               queryKey: ['ratedMovies', movieId],
            });
            setHover(0);
            setSelectedStar(0);
            setIsEditing(false);
         },
      );
   };

   return (
      <div className={styles.ratingContainer}>
         <LoginModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
         />
         {[...Array(TOTAL_STARS)].map((_, index) => {
            const currentRating = index + 1;

            return (
               <label key={`ratingStar-${index}`}>
                  <input
                     type="radio"
                     name="rating"
                     value={currentRating}
                     onChange={() =>
                        isEditing && setSelectedStar(currentRating)
                     }
                     className={styles.ratingInput}
                     disabled={!isEditing}
                  />
                  <span
                     className={cx(styles.ratingStar, {
                        [styles.activeStar]:
                           currentRating <=
                           (hover || selectedStar || movieCurrentApiRating),
                        [styles.inactiveStar]:
                           currentRating >
                           (hover || selectedStar || movieCurrentApiRating),
                     })}
                     onMouseEnter={() =>
                        isUserLoggedIn && isEditing && setHover(currentRating)
                     }
                     onMouseLeave={() => isEditing && setHover(0)}
                  >
                     &#9733;
                  </span>
               </label>
            );
         })}
         {!isEditing ? (
            isUserLoggedIn ? (
               <button
                  className={styles.ratingButton}
                  onClick={() => setIsEditing(true)}
               >
                  Rate this Movie
               </button>
            ) : (
               <button
                  className={styles.ratingButton}
                  onClick={() => setIsModalVisible(!isModalVisible)}
               >
                  Login to Rate
               </button>
            )
         ) : (
            <>
               <button
                  className={cx(styles.ratingButton, styles.saveRatingButton)}
                  onClick={() => {
                     handleAddRatingToMovie();
                  }}
               >
                  Save Rating
               </button>
               {movieCurrentApiRating > 0 && (
                  <button
                     className={cx(
                        styles.ratingButton,
                        styles.saveRatingButton,
                     )}
                     onClick={() => handleOnDeleteRating()}
                  >
                     Delete Rating
                  </button>
               )}
               <button
                  className={cx(styles.ratingButton, styles.closeRatingButton)}
                  onClick={() => {
                     setIsEditing(false);
                     setSelectedStar(movieCurrentApiRating);
                  }}
               >
                  Close
               </button>
            </>
         )}
      </div>
   );
};

export default StarRating;
