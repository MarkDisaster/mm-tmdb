import { CContainer, CListGroup, CListGroupItem, CRow } from '@coreui/react';
import MoviesCarousel from '../../components/MoviesCarousel';
import MoviePanel from '../../components/MoviePanel';
import { useLoaderData } from 'react-router-dom';
import { getLastReviewsChartValues } from '../../helpers/getLastReviewsChartValues';
import { getYouTubeOfficialVideoKey } from '../../helpers/getOfficialMovieYoutubeVIdeo';
import StarRating from '../../components/StarRating';
import YoutubeVideo from '../../components/YoutubeVideo';
import MovieReviews from '../../components/MovieReviews';
import LastReviewsChart from '../../components/LastReviewsChart';
import ImdbLink from '../../components/ImdbLink';
import { getFormattedBudget } from '../../helpers/getFormattedBudget';
import { useState } from 'react';
import Pagination from '../../components/Pagination';
import { MovieLoaderData } from './interfaces';

import styles from './style.module.css';

const MoviePage = () => {
   const [currentReviewsPage, setCurrentReviewsPage] = useState(1);

   const { movieData, movieReviews, movieVideos, similiarMovies } =
      useLoaderData() as MovieLoaderData;

   const budgetFormatted = movieData?.budget
      ? getFormattedBudget(movieData?.budget)
      : '-';

   const movieVideoUrl =
      movieVideos?.results && getYouTubeOfficialVideoKey(movieVideos.results);

   const lastReviewsChartValues =
      movieReviews?.results !== undefined
         ? getLastReviewsChartValues(movieReviews.results)
         : [];

   const handleOnChangeReviewPage = (page: number) =>
      setCurrentReviewsPage(page);

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         {movieData && <MoviePanel {...movieData} />}

         <CRow className={styles.overview}>
            <CContainer className={styles.overviewLeftContainer}>
               <h4 className={styles.similiarMoviesHeader}>Reviews</h4>
               {movieReviews?.results && movieReviews?.results.length > 0 ? (
                  <>
                     <MovieReviews movieReviews={movieReviews} />
                     <CContainer className={styles.paginationContainer}>
                        <Pagination
                           currentPage={movieReviews.page || currentReviewsPage}
                           totalPages={movieReviews.total_pages}
                           handleOnPageChange={handleOnChangeReviewPage}
                        />
                     </CContainer>
                  </>
               ) : (
                  <h6>Zatím žádné reviews.</h6>
               )}
            </CContainer>

            <CContainer className={styles.overviewRightContainer}>
               <h4 className={styles.similiarMoviesHeader}>Your Rating</h4>
               <StarRating movieId={movieData.id} />

               <>
                  <CListGroup className={styles.movieMoreInfo}>
                     <CListGroupItem>
                        Original name: <b>{movieData?.original_title}</b>
                     </CListGroupItem>
                     <CListGroupItem>
                        Budget: <b>${budgetFormatted}</b>
                     </CListGroupItem>
                  </CListGroup>
                  <h4 className={styles.similiarMoviesHeader}>Last reviews</h4>
                  <LastReviewsChart chartValues={lastReviewsChartValues} />
               </>

               <CContainer className={styles.overviewLinks}>
                  <ImdbLink imdbId={movieData?.imdb_id ?? ''} />
               </CContainer>

               {movieVideoUrl && <YoutubeVideo youtubeUrl={movieVideoUrl} />}
            </CContainer>
         </CRow>

         <CRow className={styles.similiarMoviesRow}>
            <h3 className={styles.similiarMoviesHeader}>Similiar Movies</h3>
            <MoviesCarousel movies={similiarMovies?.results ?? []} />
         </CRow>
      </CContainer>
   );
};

export default MoviePage;
