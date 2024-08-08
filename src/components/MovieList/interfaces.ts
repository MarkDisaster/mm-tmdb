import { Dispatch, SetStateAction } from 'react';
import { SearchMoviesResults } from '../../services/SearchService/types';

export interface MovieTablesProps {
   movies: SearchMoviesResults[];
   isLoading: boolean;
   onSelectMovie: Dispatch<SetStateAction<boolean>>;
}
