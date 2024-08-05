import { CAlert, CAvatar, CListGroup, CListGroupItem } from '@coreui/react';

import styles from './style.module.css';
import { MovieReviewsProps } from './interfaces';

const MovieReviews = ({ movieReviews }: MovieReviewsProps) => {
   return (
      <CListGroup className={styles.overviewReviewsContainer}>
         {movieReviews?.results &&
            movieReviews?.results.map(
               ({ author_details, created_at, content }, index) => {
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

                           <small>{created_at}</small>
                        </div>
                        {author_details.rating && (
                           <CAlert
                              color="warning"
                              className={styles.rating}
                           >
                              Rating: <b>{author_details.rating}/10</b>
                           </CAlert>
                        )}
                        <p className="mb-1">{content}</p>
                     </CListGroupItem>
                  );
               },
            )}
      </CListGroup>
   );
};

export default MovieReviews;
