import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { CCol, CContainer, CRow } from '@coreui/react';

import SearchService from '../../api/search-service';
import MovieService from '../../api/movie-service';

import { MoviesToCompareState } from '../../stores/moviesToCompare/store';
import { addMovie } from '../../stores/moviesToCompare/slice';

import { useDebounce } from '../../hooks/useDebounce';

import MoviesTable from '../../components/MovieTable';
import SearchForm from '../../components/SearchForm';
import MovieCard from '../../components/MovieCard';

const MoviesComparingPage = () => {
   const [searchedMovie, setSearchedMovie] = useState('');
   const debouncedSearchMovie = useDebounce(searchedMovie, 500);

   const dispatch = useDispatch();
   const moviesToCompareState = useSelector(
      (state: MoviesToCompareState) => state.moviesToCompare.values,
   );

   const [selectedMovieId, setSelectedMovieId] = useState(0);

   const params = {
      query: debouncedSearchMovie,
      page: 1,
      language: 'en-US',
      include_adult: true,
   };

   const { data, isLoading } = useQuery({
      queryKey: ['getMovie', params],
      queryFn: async () => SearchService.getMoviesByName(params),
   });

   const handleSearchedMovieInputOnChange = (value: string) => {
      console.log('event.target.value', value);
      setSearchedMovie(value);
   };

   const { data: dataMovie } = useQuery({
      queryKey: ['getMovie', selectedMovieId],
      queryFn: async () => MovieService.getMovieById(selectedMovieId),
   });

   const handleSetSelectedMovieId = (movie_id: number) => {
      console.log('event.target.value', movie_id);
      setSelectedMovieId(movie_id);
   };

   useEffect(() => {
      if (dataMovie) {
         dispatch(addMovie(dataMovie));
      }
   }, [dataMovie, dispatch]);

   console.log('moviesToCompareState', moviesToCompareState);

   return (
      <CContainer
         fluid
         className="vh-100"
      >
         <CRow className="h-100">
            <CCol
               xs={3}
               className="bg-primary text-white p-4"
            >
               <h1>Movie Comparator</h1>
               <h4>Find a Movie and add it to comparation</h4>
               <SearchForm
                  setSearchedMovie={handleSearchedMovieInputOnChange}
               />
               <MoviesTable
                  movies={data?.results ?? []}
                  isLoading={isLoading}
                  setSelectedMovieId={handleSetSelectedMovieId}
               />
            </CCol>
            <CCol xs={9}>
               <CRow className="mc-movie-row">
                  {moviesToCompareState.map((movieToCompare, index) => {
                     return (
                        <MovieCard
                           {...movieToCompare}
                           key={`movieCard-${index}`}
                        />
                     );
                  })}
               </CRow>
            </CCol>
         </CRow>
      </CContainer>
   );
};

export default MoviesComparingPage;
