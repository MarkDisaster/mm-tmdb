import { CContainer, CListGroup, CListGroupItem, CRow } from '@coreui/react';

import MoviesCarousel from '../../components/MoviesCarousel';
import { useQuery } from '@tanstack/react-query';
import MovieService from '../../services/movie-service';

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

   const getUpcommingMoviesParams = {
      movieId: urlLastSegmentNumber,
      page: 1,
      language: 'en-US',
      region: 'US',
   };

   const { data: movieData } = useQuery({
      queryKey: ['upcommingMovies', urlLastSegment],
      queryFn: async () => MovieService.getMovieById(urlLastSegmentNumber),
   });

   const { data: similiarMovies } = useQuery({
      queryKey: ['similiarMovies', urlLastSegmentNumber],
      queryFn: async () =>
         MovieService.getSimiliarMovies(getUpcommingMoviesParams),
   });

   const getMovieReviewsParams = {
      movieId: urlLastSegmentNumber,
      page: 1,
      language: 'en-US',
   };

   const { data: movieReviews } = useQuery({
      queryKey: ['movieReviews', urlLastSegmentNumber],
      queryFn: async () => MovieService.getMovieReviews(getMovieReviewsParams),
   });

   const getMovieVideosParams = {
      movieId: urlLastSegmentNumber,
      language: 'en-US',
   };

   const { data: movieVideos } = useQuery({
      queryKey: ['movieVideos', urlLastSegmentNumber],
      queryFn: async () => MovieService.getMovieVideos(getMovieVideosParams),
   });

   const budgetFormatted = movieData?.budget
      ? getFormattedBudget(movieData?.budget)
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
         {movieData && <MoviePanel {...movieData} />}

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
