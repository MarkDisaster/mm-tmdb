import { CAlert } from '@coreui/react';
import { IMDB_URI } from '../../services/constants';
import { ImdbLinkProps } from './interfaces';

import styles from './style.module.css';

const ImdbLink = ({ imdbId }: ImdbLinkProps) => {
   if (imdbId.length < 1) return;

   return (
      <CAlert
         color="warning"
         className={styles.cAlertOverview}
      >
         <a
            href={`${IMDB_URI}${imdbId}`}
            target="_blank"
            className={styles.bold}
         >
            IMDB
         </a>
      </CAlert>
   );
};

export default ImdbLink;
