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
                        className="mc-search-table-row"
                     >
                        <CTableDataCell className="p-0 ps-3 border-0">
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
                        <CTableDataCell className="pt-2 ps-3 pe-3 border-0 fw-bold fs-6">
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
