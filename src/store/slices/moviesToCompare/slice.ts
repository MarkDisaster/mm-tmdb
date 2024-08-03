import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesToCompareState } from './interfaces';
import { GetMovieByIdApiReturn } from '../../../services/movie-service/types';

export const initialState: MoviesToCompareState = {
   values: [],
};

const moviesToCompareSlice = createSlice({
   name: 'moviesToCompare',
   initialState,
   reducers: {
      addMovie: (state, action: PayloadAction<GetMovieByIdApiReturn>) => {
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
      addRemoveMovie: (state, action: PayloadAction<GetMovieByIdApiReturn>) => {
         const movieIndex = state.values.findIndex(
            (movie) => movie.id === action.payload.id,
         );
         if (movieIndex !== -1) {
            state.values.splice(movieIndex, 1);
         } else {
            state.values.push(action.payload);
         }
      },
   },
});

export const { addMovie, removeMovie, addRemoveMovie } =
   moviesToCompareSlice.actions;

export default moviesToCompareSlice.reducer;
