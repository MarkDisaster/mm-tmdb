import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './interfaces';
import { GetMovieByIdApiReturn } from '../../api/movie-service/types';

export const initialState: CounterState = {
   values: [],
};

const moviesToCompareSlice = createSlice({
   name: 'moviesToCompare',
   initialState,
   reducers: {
      addMovie: (state, action: PayloadAction<GetMovieByIdApiReturn>) => {
         console.log('action.payload.id', action.payload.id);
         const movieExists = state.values.some(
            (movie) => movie.id === action.payload.id,
         );
         if (!movieExists) {
            state.values.push(action.payload);
         }
      },
      removeMovie: (state, action: PayloadAction<number>) => {
         state.values = state.values.filter(
            (movie) => movie.id !== action.payload,
         );
      },
   },
});

export const { addMovie, removeMovie } = moviesToCompareSlice.actions;

export default moviesToCompareSlice.reducer;
