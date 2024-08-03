export interface MovieBarChartProps {
   original_title: string;
   popularity: number;
   vote_average: number;
   vote_count: number;
}

export enum DATA_TYPE {
   POPULARITY = 'popularity',
   VOTE_AVERAGE = 'vote_average',
   VOTE_COUNT = 'vote_count',
}
