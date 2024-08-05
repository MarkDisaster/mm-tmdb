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
import { TMDB_IMG_URI } from '../../services/constants';

import AddRemoveFavoritesButton from '../AddRemoveFavoritesButton';
import AddRemoveCompareButton from '../AddRemoveCompareButton';

import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

const MoviesTable = ({
   movies,
   isLoading,
   onSelectMovie,
}: MovieTablesProps) => {
   const navigate = useNavigate();
   const handleOnClickMovie = (id: number) => {
      navigate(`/movie/${id}`);
      onSelectMovie(false);
   };

   if (isLoading) return <CSpinner color="blue" />;
   if (movies.length < 1) return;

   return (
      <CRow className={styles.moviesTableWrapper}>
         <CTable>
            <CTableBody>
               {movies?.map((movie, index) => {
                  return (
                     <CTableRow
                        key={index}
                        className={styles.searchTableRow}
                        onClick={() => handleOnClickMovie(movie.id)}
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
                           <div>{movie.original_title}</div>
                           <div className={styles.searchTableButtons}>
                              <AddRemoveCompareButton
                                 selectedMovieId={movie.id}
                              />
                              <AddRemoveFavoritesButton
                                 selectedMovieId={movie.id}
                              />
                           </div>
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
