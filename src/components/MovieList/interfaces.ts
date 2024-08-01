import { SearchMoviesResults } from '../../services/search-service/types';

export interface MovieTablesProps {
   movies: SearchMoviesResults[];
   isLoading: boolean;
}
