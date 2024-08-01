import { useSelector } from 'react-redux';
import { CCol, CContainer, CRow } from '@coreui/react';

import { RootState } from '../../store/store';
import MovieCard from '../../components/MovieCard';
import BarChart from '../../components/BarChart';

import { getMoviesBarChartValues } from '../../helpers/getMoviesBarChartValues/getMoviesBarChartValues';

import styles from './style.module.css';

const MoviesComparingPage = () => {
   const moviesToCompareState = useSelector(
      (state: RootState) => state.moviesToCompare.values,
   );

   const barChartData = getMoviesBarChartValues(moviesToCompareState);

   return (
      <CContainer fluid>
         <CRow className="min-vh-100">
            <CCol xs={10}>
               <CRow className={styles.movieRow}>
                  {moviesToCompareState.map((movieToCompare, index) => {
                     return (
                        <MovieCard
                           {...movieToCompare}
                           key={`movieCard-${index}`}
                        />
                     );
                  })}
               </CRow>
               {barChartData.length > 0 && (
                  <CRow className="justify-content-center pt-5">
                     <h4 className="text-center pb-5">Popularity Chart</h4>
                     <BarChart barChartValues={barChartData} />
                  </CRow>
               )}
            </CCol>
         </CRow>
      </CContainer>
   );
};

export default MoviesComparingPage;
