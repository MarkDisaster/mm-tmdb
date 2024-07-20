import { useQuery } from '@tanstack/react-query';
import SearchService from '../../api/search-service';

import MoviesTable from '../../components/MovieTable';
import SearchForm from '../../components/SearchForm';
import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

const MoviesComparingPage = () => {
   const [searchedMovie, setSearchedMovie] = useState('');
   const debouncedSearchMovie = useDebounce(searchedMovie, 500);

   const params = {
      query: debouncedSearchMovie,
      page: 1,
      language: 'en-US',
      include_adult: true,
   };

   const { data, isLoading } = useQuery({
      queryKey: ['getMovie', params],
      queryFn: async () => SearchService.getMovies(params),
   });

   const handleSearchedMovieInputOnChange = (value: string) => {
      console.log('event.target.value', value);
      setSearchedMovie(value);
   };

   return (
      <>
         <div>useDebounce value {debouncedSearchMovie}</div>
         <SearchForm setSearchedMovie={handleSearchedMovieInputOnChange} />
         <MoviesTable
            movies={data?.results ?? []}
            isLoading={isLoading}
         />
      </>
   );
};

export default MoviesComparingPage;
