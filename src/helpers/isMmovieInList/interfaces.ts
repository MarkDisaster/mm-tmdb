interface MovieGenre {
   id: number;
   name: string;
}

export interface Movie {
   id: number;
   poster_path: string;
   budget: number;
   genres: MovieGenre[];
   original_title: string;
   revenue: number;
   vote_average: number;
   vote_count: number;
   popularity: number;
}
