import { CAvatar, CListGroup, CListGroupItem } from '@coreui/react';

import styles from './style.module.css';
import { MovieReviewsProps } from './interfaces';
import StarRatingUser from '../StarRatingUser';
import { getFormattedDate } from '../../helpers/getFormattedDate';

const MovieReviews = ({ movieReviews }: MovieReviewsProps) => {
   return (
      <CListGroup className={styles.overviewReviewsContainer}>
         {movieReviews?.results &&
            movieReviews?.results.map(
               ({ author_details, created_at, content }, index) => {
                  const formattedDate = getFormattedDate(created_at);
                  return (
                     <CListGroupItem
                        className={styles.overviewReviewsLi}
                        key={`review-${index}`}
                     >
                        <div className="d-flex w-100 justify-content-between">
                           <div className={styles.nameAvatarContainer}>
                              <CAvatar
                                 color="warning"
                                 textColor="white"
                                 src={`https://www.gravatar.com/avatar/${author_details.avatar}?d=identicon`}
                              ></CAvatar>
                              {author_details.username}
                           </div>

                           <small>{formattedDate}</small>
                        </div>
                        {author_details?.rating && (
                           <StarRatingUser
                              ratingValue={Number(author_details.rating)}
                           />
                        )}

                        <p>{content}</p>
                     </CListGroupItem>
                  );
               },
            )}
      </CListGroup>
   );
};

export default MovieReviews;
