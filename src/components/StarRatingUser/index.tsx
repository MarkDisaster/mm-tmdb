import { TOTAL_STARS } from './constants';
import { StarRatingUserProps } from './interfaces';

import styles from './style.module.css';

const StarRatingUser = ({ ratingValue }: StarRatingUserProps) => {
   return (
      <div className={styles.ratingContainer}>
         {[...Array(TOTAL_STARS)].map((_, index) => {
            const currentRating = index + 1;

            return (
               <label key={`ratingStarShow-${index}`}>
                  <input
                     type="radio"
                     name="rating"
                     value={currentRating}
                     className={styles.ratingInput}
                  />
                  <span
                     className={styles.ratingStar}
                     style={{
                        color:
                           currentRating <= ratingValue ? '#ffc107' : '#e4e5e9',
                     }}
                  >
                     &#9733;
                  </span>
               </label>
            );
         })}
      </div>
   );
};

export default StarRatingUser;
