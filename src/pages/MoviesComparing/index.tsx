import { useSelector } from 'react-redux';
import { CCol, CContainer, CRow } from '@coreui/react';

import { RootState } from '../../store/store';
import BarChart from '../../components/BarChart';

import { getMoviesBarChartValues } from '../../helpers/getMoviesBarChartValues/getMoviesBarChartValues';
import MoviesCarousel from '../../components/MoviesCarousel';
import { cilGraph } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import styles from './style.module.css';

const MoviesComparingPage = () => {
   const moviesToCompareState = useSelector(
      (state: RootState) => state.moviesToCompare.values,
   );

   const barChartData = getMoviesBarChartValues(moviesToCompareState);

   return (
      <CContainer fluid>
         <CRow className={styles.container}>
            {moviesToCompareState.length > 0 ? (
               <>
                  <MoviesCarousel movies={moviesToCompareState} />
                  <CCol>
                     {barChartData.length > 0 && (
                        <CRow className="justify-content-center pt-5">
                           <h4 className="text-center pb-5">Graf popularity</h4>
                           <BarChart barChartValues={barChartData} />
                        </CRow>
                     )}
                  </CCol>
               </>
            ) : (
               <h1 className="text-center mt-5">
                  Vyhledej film pomocí vyhledávácího pole
                  <br />a přidej ho tlačítkem
                  <CIcon
                     icon={cilGraph}
                     height={32}
                     className="mx-2 mt-2"
                  />
                  k porovnání.
               </h1>
            )}
         </CRow>
      </CContainer>
   );
};

export default MoviesComparingPage;
