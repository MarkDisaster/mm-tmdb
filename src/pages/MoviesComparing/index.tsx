import { useSelector } from 'react-redux';
import { CAlert, CContainer, CRow } from '@coreui/react';

import { RootState } from '../../store/store';
import StatsBarChart from '../../components/BarChart';

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
         <h3 className={styles.comparedMoviesHeader}>Compared Movies</h3>
         {moviesToCompareState.length > 0 ? (
            <CRow className={styles.wraper}>
               <CContainer className={styles.movieContainer}>
                  <MoviesCarousel movies={moviesToCompareState} />
               </CContainer>

               <CRow>
                  {barChartDataPopularity.length > 0 && (
                     <CRow className={styles.comparedMoviesRow}>
                        <h3 className={styles.comparedMoviesHeader}>
                           Popularity chart
                        </h3>
                        <StatsBarChart
                           barChartValues={barChartDataPopularity}
                        />
                     </CRow>
                  )}
               </CRow>

               <CRow>
                  {barChartDataVoteAverage.length > 0 && (
                     <CRow className={styles.comparedMoviesRow}>
                        <h3 className={styles.comparedMoviesHeader}>
                           Rating chart
                        </h3>
                        <StatsBarChart
                           barChartValues={barChartDataVoteAverage}
                        />
                     </CRow>
                  )}
               </CRow>

               <CRow>
                  {barChartDataVoteCount.length > 0 && (
                     <CRow className={styles.comparedMoviesRow}>
                        <h3 className={styles.comparedMoviesHeader}>
                           Vote Count chart
                        </h3>
                        <StatsBarChart barChartValues={barChartDataVoteCount} />
                     </CRow>
                  )}
               </CRow>
            </CRow>
         ) : (
            <CAlert
               color="warning"
               className={styles.alert}
            >
               <h5>
                  Vyhledej film pomocí vyhledávácího pole a přidej ho tlačítkem
                  <CIcon
                     icon={cilGraph}
                     height={22}
                     className={styles.alertIcon}
                  />
                  k porovnání.
               </h5>
            </CAlert>
         )}
      </CContainer>
   );
};

export default MoviesComparingPage;
