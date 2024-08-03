import { CContainer, CRow } from '@coreui/react';

import MoviesCarousel from '../../components/MoviesCarousel';
import { useQuery } from '@tanstack/react-query';
import MovieService from '../../services/movie-service';

import styles from './style.module.css';
import MoviePanel from '../../components/MoviePanel';
import { useLocation } from 'react-router-dom';

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

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         {movieData && <MoviePanel {...movieData} />}
         <h1 className="text-center mt-5">Similiar Movies</h1>
         <CRow>
            <MoviesCarousel movies={similiarMovies?.results ?? []} />
         </CRow>
      </CContainer>
   );
};

export default MoviePage;
