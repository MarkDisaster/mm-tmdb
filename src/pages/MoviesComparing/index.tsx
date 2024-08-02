import { useSelector } from 'react-redux';
import { CCol, CContainer, CRow } from '@coreui/react';

import { RootState } from '../../store/store';
import BarChart from '../../components/BarChart';

import { getMoviesBarChartValues } from '../../helpers/getMoviesBarChartValues/getMoviesBarChartValues';
import MoviesCarousel from '../../components/MoviesCarousel';

const MoviesComparingPage = () => {
   const moviesToCompareState = useSelector(
      (state: RootState) => state.moviesToCompare.values,
   );

   const barChartData = getMoviesBarChartValues(moviesToCompareState);

   return (
      <CContainer fluid>
         <CRow className="min-vh-100">
            <MoviesCarousel movies={moviesToCompareState} />
            <CCol>
               {barChartData.length > 0 && (
                  <CRow className="justify-content-center pt-5">
                     <h4 className="text-center pb-5">Graf popularity</h4>
                     <BarChart barChartValues={barChartData} />
                  </CRow>
               )}
            </CCol>
         </CRow>
      </CContainer>
   );
};

export default MoviesComparingPage;
