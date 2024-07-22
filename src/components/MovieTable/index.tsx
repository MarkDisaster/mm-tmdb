import {
   CImage,
   CRow,
   CSpinner,
   CTable,
   CTableBody,
   CTableDataCell,
   CTableRow,
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilImage } from '@coreui/icons';

import { MovieTablesProps } from './interfaces';
import { TMDB_IMG_URI } from '../../api/constants';

import styles from './style.module.css';

const MoviesTable = ({
   movies,
   isLoading,
   setSelectedMovieId,
}: MovieTablesProps) => {
   if (isLoading) return <CSpinner color="white" />;
   if (movies.length < 1) return;

   return (
      <CRow className="px-2">
         <CTable>
            <CTableBody>
               {movies?.map((movie, index) => {
                  return (
                     <CTableRow
                        key={index}
                        onClick={() => setSelectedMovieId(movie.id)}
                        className={styles.searchTableRow}
                     >
                        <CTableDataCell className={styles.searchTableCell}>
                           {movie.poster_path ? (
                              <CImage
                                 align="start"
                                 src={`${TMDB_IMG_URI}${movie.poster_path}`}
                                 width={50}
                                 className="py-2 px-0"
                              />
                           ) : (
                              <CIcon
                                 icon={cilImage}
                                 height={50}
                                 className="text-secondary"
                              />
                           )}
                        </CTableDataCell>
                        <CTableDataCell className={styles.searchTableCellName}>
                           {movie.original_title}
                        </CTableDataCell>
                     </CTableRow>
                  );
               })}
            </CTableBody>
         </CTable>
      </CRow>
   );
};

export default MoviesTable;
