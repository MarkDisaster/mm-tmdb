import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { CCol, CContainer, CFormSwitch, CRow } from '@coreui/react';

import SearchService from '../../api/search-service';
import MovieService from '../../api/movie-service';

import { RootState } from '../../store/store';
import { addMovie } from '../../store/slices/moviesToCompare/slice';
import { toggleDarkTheme } from '../../store/slices/darkTheme/slice';

import { useDebounce } from '../../hooks/useDebounce';

import MoviesTable from '../../components/MovieTable';
import SearchForm from '../../components/SearchForm';
import MovieCard from '../../components/MovieCard';
import BarChart from '../../components/BarChart';

import { getMoviesBarChartValues } from '../../helpers/getMoviesBarChartValues/getMoviesBarChartValues';

const MoviesComparingPage = () => {
   const [searchedMovie, setSearchedMovie] = useState('');
   const debouncedSearchMovie = useDebounce(searchedMovie, 500);

   const dispatch = useDispatch();
   const moviesToCompareState = useSelector(
      (state: RootState) => state.moviesToCompare.values,
   );

   const [selectedMovieId, setSelectedMovieId] = useState(0);

   const barChartData = getMoviesBarChartValues(moviesToCompareState);

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
      setSearchedMovie(value);
   };

   const { data: dataMovie } = useQuery({
      queryKey: ['getMovie', selectedMovieId],
      queryFn: async () => MovieService.getMovieById(selectedMovieId),
   });

   const handleSetSelectedMovieId = (movie_id: number) => {
      setSelectedMovieId(movie_id);
   };

   useEffect(() => {
      if (dataMovie) {
         dispatch(addMovie(dataMovie));
      }
   }, [dataMovie, dispatch]);

   const handleToggleDarkTheme = () => dispatch(toggleDarkTheme());

   return (
      <CContainer fluid>
         <CFormSwitch
            label="Switch Color Theme"
            id="ThemeSwitchButton"
            className="position-absolute top-0 end-0 mt-3 me-3"
            onClick={handleToggleDarkTheme}
         />
         <CRow className="h-100">
            <CCol
               xs={2}
               className="bg-primary text-white p-4"
            >
               <h1 className="h2">Movie Comparator</h1>
               <h2 className="h6">Find a Movie and add it to comparation</h2>
               <SearchForm
                  setSearchedMovie={handleSearchedMovieInputOnChange}
               />
               <MoviesTable
                  movies={data?.results ?? []}
                  isLoading={isLoading}
                  setSelectedMovieId={handleSetSelectedMovieId}
               />
            </CCol>
            <CCol xs={10}>
               <CRow className="mc-movie-row pb-5">
                  {moviesToCompareState.map((movieToCompare, index) => {
                     return (
                        <MovieCard
                           {...movieToCompare}
                           key={`movieCard-${index}`}
                        />
                     );
                  })}
               </CRow>
               <CRow className="justify-content-center pt-5">
                  <h2 className="text-center pb-5">Popularity Chart</h2>
                  <BarChart barChartValues={barChartData} />
               </CRow>
            </CCol>
         </CRow>
      </CContainer>
   );
};

export default MoviesComparingPage;
