import { CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react';
import { MovieTablesProps } from './interfaces';

const MoviesTable = ({movies, isLoading}: MovieTablesProps) => {

if (isLoading) return (<div>Loading...</div>)

  return (
    <CTable color="light" striped hover>
    <CTableBody>
        <CTableRow>
        <CTableDataCell className='fw-bold'>Movie Name</CTableDataCell>
        </CTableRow>
        {movies?.map((movie: { original_title: string }, index: number) => {
            return (
            <CTableRow key={index}>
            <CTableDataCell>{movie.original_title}</CTableDataCell>
            </CTableRow>)
        })}
    </CTableBody>
    </CTable>
  )
}

export default MoviesTable;

