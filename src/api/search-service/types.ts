export type SearchMoviesApiReturn = {
   page: number;
   results: SearchMoviesResults[];
   total_pages: number;
   total_results: number;
};

export type SearchMoviesResults = {
   original_title: string;
   poster_path: string;
};

export type SearchMoviesParams = {
   query: string;
   page: number;
   language: string;
   include_adult: boolean;
};
