export type GetMovieByIdApiReturn = {
   id: number;
   poster_path: string;
   backdrop_path: string;
   budget: number;
   genres: MovieGenre[];
   title: string;
   original_title: string;
   revenue: number;
   vote_average: number;
   vote_count: number;
   popularity: number;
   release_date: string;
   overview: string;
   imdb_id: string;
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

export type GetNowPlayingMoviesParams = {
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

export type GetMovieReviewsParams = {
   movieId: number;
   language: string;
   page: number;
};

type Author = {
   name: string;
   username: string;
   avatar: string;
   rating: string;
};

type Review = {
   author: string;
   author_details: Author;
   content: string;
   created_at: string;
   id: string;
   updated_at: string;
   url: string;
};

export type GetMovieReviewsReturn = {
   id: number;
   page: number;
   results: Review[];
   total_pages: number;
   total_results: number;
};

export type GetMovieVideosParams = {
   movieId: number;
   language: string;
};

type MovieVideo = {
   iso_639_1: string;
   iso_3166_1: string;
   name: string;
   key: string;
   site: string;
   size: number;
   type: string;
   official: boolean;
   published_at: string;
   id: string;
};

export type GetMovieVideosReturn = {
   id: number;
   results: MovieVideo[];
};

export type AddDeleteMovieRatingParams = {
   session_id: string;
};

export type AddMovieRatingBody = {
   value: number;
};

export type AddDeleteMovieRatigReturn = {
   status_code: number;
   status_message: string;
};
