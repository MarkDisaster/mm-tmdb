export type GetMovieByIdApiReturn = {
   id: number;
   poster_path: string;
   backdrop_path: string;
   budget: number;
   genres: MovieGenre[];
   original_title: string;
   revenue: number;
   vote_average: number;
   vote_count: number;
   popularity: number;
   release_date: string;
   overview: string;
};

type MovieGenre = {
   id: number;
   name: string;
};

export type SearchMoviesResults = {
   original_title: string;
   poster_path: string;
};

export type GetUpcommingMoviesParams = {
   language: string;
   page: number;
   region: string;
};

type GetUpcommingMoviesDates = {
   maximum: string;
   minimum: string;
};

export type GetMoviesReturn = {
   dates: GetUpcommingMoviesDates;
   page: number;
   results: GetMovieByIdApiReturn[];
   total_pages: number;
   total_results: number;
};

export type GetSimiliarMoviesParams = {
   movieId: number;
   language: string;
   page: number;
   region: string;
};
