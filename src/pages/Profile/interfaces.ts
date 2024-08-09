interface MovieGenre {
   id: number;
   name: string;
}

interface Movie {
   id: number;
   poster_path: string;
   budget: number;
   genres: MovieGenre[];
   title: string;
   original_title: string;
   revenue: number;
   vote_average: number;
   vote_count: number;
   popularity: number;
}

export type FavoriteMoviesLoaderData = {
   page: number;
   results: Movie[];
   total_pages: number;
   total_results: number;
};
