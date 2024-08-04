import { useState } from 'react';
import { TOTAL_STARS } from './constants';
import { StarRatingProps } from './interfaces';

import styles from './style.module.css';
import AccountService from '../../services/account-service';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { AddMovieRatingBody, SORT } from '../../services/account-service/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMovieRating } from '../../helpers/getMovieRating';

const StarRating = ({ movieId }: StarRatingProps) => {
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);
   const [hover, setHover] = useState<number>(0);

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
   });

   const movieCurrentApiRating = ratedMovies?.results
      ? getMovieRating(movieId, ratedMovies.results)
      : 0;

   const handleAddRatingToMovie = (currentRating: AddMovieRatingBody) => {
      const addRatingToMovieParams = {
         session_id: sessionId,
      };

      AccountService.addMovieRating(
         movieId,
         addRatingToMovieParams,
         currentRating,
      ).then(() => {
         setTimeout(() => {
            queryClient.invalidateQueries({
               queryKey: ['ratedMovies', movieId],
            });
         }, 300);
      });
   };

   return (
      <div className={styles.ratingContainer}>
         {[...Array(TOTAL_STARS)].map((_, index) => {
            const currentRating = index + 1;
            const currentRatingParams = {
               value: currentRating,
            };

            return (
               <label key={`ratingStar-${index}`}>
                  <input
                     type="radio"
                     name="rating"
                     value={currentRating}
                     onChange={() =>
                        handleAddRatingToMovie(currentRatingParams)
                     }
                     className={styles.ratingInput}
                  />
                  <span
                     className={styles.ratingStar}
                     style={{
                        color:
                           currentRating <= (hover || movieCurrentApiRating)
                              ? '#ffc107'
                              : '#e4e5e9',
                     }}
                     onMouseEnter={() => setHover(currentRating)}
                     onMouseLeave={() => setHover(0)}
                  >
                     &#9733;
                  </span>
               </label>
            );
         })}
      </div>
   );
};

export default StarRating;
