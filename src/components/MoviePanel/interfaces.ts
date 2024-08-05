interface MovieGenre {
   id: number;
   name: string;
}
export interface MoviePanelProps {
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
   backdrop_path: string;
   release_date: string;
   overview: string;
}
