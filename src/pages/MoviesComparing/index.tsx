import { useQuery } from '@tanstack/react-query';

import SearchService from '../../api/search-service';
import MoviesTable from '../../components/MoviesTable';

const MoviesComparingPage = () => {

    const params = {
        query: 'Oppenheimer',
        page: 1,
        language: 'en-US',
        include_adult: false,
    };

    const { data, isLoading } = useQuery({
        queryKey: ['getMovie', params],
        queryFn: async () => SearchService.getMovies(params),
    });

  return (
    <>
        <MoviesTable movies={data?.results ?? []} isLoading={isLoading} />
    </>
  )
}

export default MoviesComparingPage

