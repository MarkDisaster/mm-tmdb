import { CContainer, CForm, CFormInput } from '@coreui/react';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import SearchService from '../../services/search-service';
import MovieList from '../MovieList';

import styles from './style.module.css';

const SearchForm = () => {
   const [searchedMovie, setSearchedMovie] = useState('');
   const [showList, setShowList] = useState(true);
   const listRef = useRef<HTMLDivElement>(null);

   const debouncedSearchMovie = useDebounce(searchedMovie, 500);

   const params = {
      query: debouncedSearchMovie,
      page: 1,
      language: 'en-US',
      include_adult: true,
   };

   const { data: dataSearchedMovies, isLoading } = useQuery({
      queryKey: ['getMovie', params],
      queryFn: async () => SearchService.getMoviesByName(params),
   });

   const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
         setShowList(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <CForm className={styles.searchWrapper}>
         <CContainer>
            <CFormInput
               type="search"
               id="searchMovieInput"
               placeholder="Find Movie"
               aria-describedby="exampleFormControlInputHelpInline"
               onChange={(e) => {
                  setSearchedMovie(e.target.value);
                  setShowList(true);
               }}
               onClick={() => {
                  setShowList(true);
               }}
            />
         </CContainer>
         {showList &&
            dataSearchedMovies?.results !== undefined &&
            dataSearchedMovies?.results.length > 0 && (
               <CContainer
                  className={styles.searchResultsWrapper}
                  ref={listRef}
               >
                  <MovieList
                     movies={dataSearchedMovies?.results ?? []}
                     isLoading={isLoading}
                  />
               </CContainer>
            )}
      </CForm>
   );
};

export default SearchForm;
