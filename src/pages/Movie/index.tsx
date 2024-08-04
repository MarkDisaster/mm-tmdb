import {
   CAlert,
   CAvatar,
   CContainer,
   CListGroup,
   CListGroupItem,
   CRow,
} from '@coreui/react';

import MoviesCarousel from '../../components/MoviesCarousel';
import { useQuery } from '@tanstack/react-query';
import MovieService from '../../services/movie-service';

import styles from './style.module.css';
import MoviePanel from '../../components/MoviePanel';
import { useLocation } from 'react-router-dom';
import { getLastReviewsChartValues } from '../../helpers/getLastReviewsChartValues';
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from 'recharts';
import { getYouTubeOfficialVideoKey } from '../../helpers/getOfficialMovieYoutubeVIdeo';
import { IMDB_URI } from '../../services/constants';
import StarRating from '../../components/StarRating';

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

   const movieVideoUrl =
      movieVideos?.results && getYouTubeOfficialVideoKey(movieVideos.results);

   const lastReviewsChartValues =
      movieReviews?.results !== undefined &&
      getLastReviewsChartValues(movieReviews.results);

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         {movieData && <MoviePanel {...movieData} />}

         <CRow className={styles.overview}>
            <CContainer className={styles.overviewLeftContainer}>
               <h4 className={styles.similiarMoviesHeader}>Overview</h4>
               <CContainer className={styles.overviewLinks}>
                  {movieData?.imdb_id && (
                     <CAlert
                        color="warning"
                        className={styles.cAlertOverview}
                     >
                        <a
                           href={`${IMDB_URI}${movieData.imdb_id}`}
                           target="_blank"
                           className={styles.bold}
                        >
                           IMDB
                        </a>
                     </CAlert>
                  )}
                  {movieVideoUrl && (
                     <CAlert
                        color="danger"
                        className={styles.cAlertOverview}
                     >
                        <a
                           href={movieVideoUrl}
                           target="_blank"
                           className={styles.bold}
                        >
                           Watch YouTube Trailer
                        </a>
                     </CAlert>
                  )}
               </CContainer>
            </CContainer>
            <CContainer className={styles.overviewRightContainer}>
               <h4 className={styles.similiarMoviesHeader}>Rate the Movie</h4>
               <StarRating movieId={urlLastSegmentNumber} />

               <h4 className={styles.similiarMoviesHeader}>Last reviews</h4>
               {lastReviewsChartValues && (
                  <ResponsiveContainer
                     width="100%"
                     height={100}
                     style={{ marginBottom: '-30px' }}
                  >
                     <LineChart
                        width={300}
                        height={150}
                        data={lastReviewsChartValues}
                     >
                        <XAxis
                           dataKey="name"
                           tick={false}
                        />
                        <Tooltip />
                        <Line
                           type="monotone"
                           dataKey="rating"
                           stroke="#0d6efd"
                           strokeWidth={3}
                        />
                     </LineChart>
                  </ResponsiveContainer>
               )}
               <CListGroup className={styles.overviewReviewsContainer}>
                  {movieReviews?.results &&
                     movieReviews?.results.map(
                        ({ author_details, created_at, content }, index) => {
                           return (
                              <CListGroupItem
                                 className={styles.overviewReviewsLi}
                                 key={`review-${index}`}
                              >
                                 <div className="d-flex w-100 justify-content-between">
                                    <div className={styles.nameAvatarContainer}>
                                       <CAvatar
                                          color="warning"
                                          textColor="white"
                                          src={`https://www.gravatar.com/avatar/${author_details.avatar}?d=identicon`}
                                       ></CAvatar>
                                       {author_details.username}
                                    </div>

                                    <small>{created_at}</small>
                                 </div>
                                 {author_details.rating && (
                                    <CAlert
                                       color="warning"
                                       className={styles.rating}
                                    >
                                       Rating: <b>{author_details.rating}/10</b>
                                    </CAlert>
                                 )}
                                 <p className="mb-1">{content}</p>
                              </CListGroupItem>
                           );
                        },
                     )}
               </CListGroup>
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
