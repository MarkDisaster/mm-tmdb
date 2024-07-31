import { combineReducers, configureStore } from '@reduxjs/toolkit';
import darkThemeReducer from './slices/darkTheme/slice';
import moviesToCompareReducer from './slices/moviesToCompare/slice';
import localStorageReducer from './slices/localStorage/slice';

const rootReducer = combineReducers({
   darkTheme: darkThemeReducer,
   moviesToCompare: moviesToCompareReducer,
   localStorage: localStorageReducer,
});

export const rootStore = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type RootDispatch = typeof rootStore.dispatch;
