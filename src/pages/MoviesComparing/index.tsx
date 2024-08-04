import { useSelector } from 'react-redux';
import { CAlert, CContainer, CRow } from '@coreui/react';

import { RootState } from '../../store/store';
import BarChart from '../../components/BarChart';

import { getMoviesBarChartValues } from '../../helpers/getMoviesBarChartValues';
import MoviesCarousel from '../../components/MoviesCarousel';
import { cilGraph } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import styles from './style.module.css';
import { DATA_TYPE } from '../../helpers/getMoviesBarChartValues/interfaces';

const MoviesComparingPage = () => {
   const moviesToCompareState = useSelector(
      (state: RootState) => state.moviesToCompare.values,
   );

   const barChartDataPopularity = getMoviesBarChartValues(
      moviesToCompareState,
      DATA_TYPE.POPULARITY,
   );

   const barChartDataVoteAverage = getMoviesBarChartValues(
      moviesToCompareState,
      DATA_TYPE.VOTE_AVERAGE,
   );

   const barChartDataVoteCount = getMoviesBarChartValues(
      moviesToCompareState,
      DATA_TYPE.VOTE_COUNT,
   );

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         <h3 className="mt-5 mb-4">Compared Movies</h3>
         {moviesToCompareState.length > 0 ? (
            <CRow className="m-0">
               <MoviesCarousel movies={moviesToCompareState} />
               <CRow>
                  {barChartDataPopularity.length > 0 && (
                     <CRow className="justify-content-center pt-5">
                        <h3 className="pb-5">Popularity chart</h3>
                        <BarChart barChartValues={barChartDataPopularity} />
                     </CRow>
                  )}
               </CRow>
               <CRow>
                  {barChartDataVoteAverage.length > 0 && (
                     <CRow className="justify-content-center pt-5">
                        <h3 className="pb-5">Rating chart</h3>
                        <BarChart barChartValues={barChartDataVoteAverage} />
                     </CRow>
                  )}
               </CRow>
               <CRow>
                  {barChartDataVoteCount.length > 0 && (
                     <CRow className="justify-content-center pt-5">
                        <h3 className="pb-5">Vote Count chart</h3>
                        <BarChart barChartValues={barChartDataVoteCount} />
                     </CRow>
                  )}
               </CRow>
            </CRow>
         ) : (
            <CAlert
               color="warning"
               className="px-5 align-self-center"
            >
               <h5>
                  Vyhledej film pomocí vyhledávácího pole a přidej ho tlačítkem
                  <CIcon
                     icon={cilGraph}
                     height={22}
                     className="mx-2 mt-2 align-text-bottom"
                  />
                  k porovnání.
               </h5>
            </CAlert>
         )}
      </CContainer>
   );
};

export default MoviesComparingPage;
