import { SearchMoviesResults } from '../../api/search-service/types';

export interface MovieTablesProps {
   movies: SearchMoviesResults[];
   isLoading: boolean;
   setSelectedMovieId: (movie_id: number) => void;
}
