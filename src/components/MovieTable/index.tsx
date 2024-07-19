import { CImage, CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react';
import { MovieTablesProps } from './interfaces';
import { TMDB_IMG_URI } from '../../api/constants';

const MoviesTable = ({movies, isLoading}: MovieTablesProps) => {

if (isLoading) return (<div>Loading...</div>)

  return (
    <CTable color="light" striped hover>
    <CTableBody>
        <CTableRow>
          <CTableDataCell className='fw-bold'>Movie Name</CTableDataCell>
        </CTableRow>
          {movies?.map((movie, index) => {
            return (
              <CTableRow key={index}>
                <CTableDataCell>
                  <CImage align="start" rounded src={`${TMDB_IMG_URI}${movie.poster_path}`} height={125} />
                </CTableDataCell>
                <CTableDataCell>{movie.original_title}</CTableDataCell>
              </CTableRow>)
        })}
    </CTableBody>
    </CTable>
  )
}

export default MoviesTable;

