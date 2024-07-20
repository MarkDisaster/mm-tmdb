import { configureStore } from '@reduxjs/toolkit';
import moviesToCompareReducer from './slice';

export const moviesToCompareStore = configureStore({
   reducer: {
      moviesToCompare: moviesToCompareReducer,
   },
});

export type MoviesToCompareState = ReturnType<
   typeof moviesToCompareStore.getState
>;
export type MoviesToCompareDispatch = typeof moviesToCompareStore.dispatch;
