import { CContainer, CListGroup, CListGroupItem, CRow } from '@coreui/react';

import MoviesCarousel from '../../components/MoviesCarousel';
import { useQueries } from '@tanstack/react-query';
import MovieService from '../../services/MovieService';

import MoviePanel from '../../components/MoviePanel';
import { useLocation } from 'react-router-dom';
import { getLastReviewsChartValues } from '../../helpers/getLastReviewsChartValues';
import { getYouTubeOfficialVideoKey } from '../../helpers/getOfficialMovieYoutubeVIdeo';
import StarRating from '../../components/StarRating';
import YoutubeVideo from '../../components/YoutubeVideo';
import MovieReviews from '../../components/MovieReviews';
import LastReviewsChart from '../../components/LastReviewsChart';

import styles from './style.module.css';
import ImdbLink from '../../components/ImdbLink';
import { getFormattedBudget } from '../../helpers/getFormattedBudget';

const MoviePage = () => {
   const urlLocation = useLocation();
   const urlLocationParts = urlLocation.pathname.split('/');
   const urlLastSegment = urlLocationParts.pop() || urlLocationParts.pop();
   const urlLastSegmentNumber = Number(urlLastSegment);

   const getUpcomingMoviesParams = {
      movieId: urlLastSegmentNumber,
      page: 1,
      language: 'en-US',
      region: 'US',
   };

   const getMovieReviewsParams = {
      movieId: urlLastSegmentNumber,
      page: 1,
      language: 'en-US',
   };

   const getMovieVideosParams = {
      movieId: urlLastSegmentNumber,
      language: 'en-US',
   };

   const [
      { data: upcomingMovies },
      { data: similiarMovies },
      { data: movieReviews },
      { data: movieVideos },
   ] = useQueries({
      queries: [
         {
            queryKey: ['upcomingMovies', urlLastSegmentNumber],
            queryFn: () => MovieService.getMovieById(urlLastSegmentNumber),
         },
         {
            queryKey: ['similiarMovies', urlLastSegmentNumber],
            queryFn: () =>
               MovieService.getSimiliarMovies(getUpcomingMoviesParams),
         },
         {
            queryKey: ['movieReviews', urlLastSegmentNumber],
            queryFn: () => MovieService.getMovieReviews(getMovieReviewsParams),
         },
         {
            queryKey: ['movieVideos', urlLastSegmentNumber],
            queryFn: () => MovieService.getMovieVideos(getMovieVideosParams),
         },
      ],
   });

   const budgetFormatted = upcomingMovies?.budget
      ? getFormattedBudget(upcomingMovies?.budget)
      : '-';

   const movieVideoUrl =
      movieVideos?.results && getYouTubeOfficialVideoKey(movieVideos.results);

   const lastReviewsChartValues =
      movieReviews?.results !== undefined
         ? getLastReviewsChartValues(movieReviews.results)
         : [];

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         {upcomingMovies && <MoviePanel {...upcomingMovies} />}

         <CRow className={styles.overview}>
            <CContainer className={styles.overviewLeftContainer}>
               <h4 className={styles.similiarMoviesHeader}>Reviews</h4>
               {movieReviews?.results && movieReviews?.results.length > 0 ? (
                  <MovieReviews movieReviews={movieReviews} />
               ) : (
                  <h6>Zatím žádné reviews.</h6>
               )}
            </CContainer>

            <CContainer className={styles.overviewRightContainer}>
               <h4 className={styles.similiarMoviesHeader}>Your Rating</h4>
               <StarRating movieId={urlLastSegmentNumber} />

               <>
                  <CListGroup className={styles.movieMoreInfo}>
                     <CListGroupItem>
                        Original name: <b>{upcomingMovies?.original_title}</b>
                     </CListGroupItem>
                     <CListGroupItem>
                        Budget: <b>${budgetFormatted}</b>
                     </CListGroupItem>
                  </CListGroup>
                  <h4 className={styles.similiarMoviesHeader}>Last reviews</h4>
                  <LastReviewsChart chartValues={lastReviewsChartValues} />
               </>

               <CContainer className={styles.overviewLinks}>
                  <ImdbLink imdbId={upcomingMovies?.imdb_id ?? ''} />
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
