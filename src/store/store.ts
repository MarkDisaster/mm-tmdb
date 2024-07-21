import { combineReducers, configureStore } from '@reduxjs/toolkit';
import darkThemeReducer from './slices/darkTheme/slice';
import moviesToCompareReducer from './slices/moviesToCompare/slice';

const rootReducer = combineReducers({
   darkTheme: darkThemeReducer,
   moviesToCompare: moviesToCompareReducer,
});

export const rootStore = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type RootDispatch = typeof rootStore.dispatch;
