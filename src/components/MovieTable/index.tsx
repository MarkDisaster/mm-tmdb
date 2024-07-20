import {
   CImage,
   CTable,
   CTableBody,
   CTableDataCell,
   CTableRow,
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilImage } from '@coreui/icons';

import { MovieTablesProps } from './interfaces';
import { TMDB_IMG_URI } from '../../api/constants';

const MoviesTable = ({ movies, isLoading }: MovieTablesProps) => {
   if (isLoading) return <div>Loading...</div>;
   if (movies.length < 1) return;

   return (
      <CTable
         color="light"
         striped
         hover
      >
         <CTableBody>
            <CTableRow>
               <CTableDataCell className="fw-bold"></CTableDataCell>
               <CTableDataCell className="fw-bold">Poster</CTableDataCell>
               <CTableDataCell className="fw-bold">Name</CTableDataCell>
            </CTableRow>
            {movies?.map((movie, index) => {
               return (
                  <CTableRow
                     key={index}
                     className="mb-2"
                  >
                     <CTableDataCell>
                        <div className="form-check">
                           <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id={`MovieTableCell${index}`}
                           />
                        </div>
                     </CTableDataCell>
                     <CTableDataCell className="p-0">
                        {movie.poster_path ? (
                           <CImage
                              align="start"
                              src={`${TMDB_IMG_URI}${movie.poster_path}`}
                              width={50}
                           />
                        ) : (
                           <CIcon
                              icon={cilImage}
                              height={50}
                              className="text-secondary"
                           />
                        )}
                     </CTableDataCell>
                     <CTableDataCell>{movie.original_title}</CTableDataCell>
                  </CTableRow>
               );
            })}
         </CTableBody>
      </CTable>
   );
};

export default MoviesTable;
