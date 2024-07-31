export type GetMovieByIdApiReturn = {
   id: number;
   poster_path: string;
   budget: number;
   genres: MovieGenre[];
   original_title: string;
   revenue: number;
   vote_average: number;
   vote_count: number;
   popularity: number;
};

type MovieGenre = {
   id: number;
   name: string;
};

export type SearchMoviesResults = {
   original_title: string;
   poster_path: string;
};
