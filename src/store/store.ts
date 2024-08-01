import { combineReducers, configureStore } from '@reduxjs/toolkit';
import darkThemeReducer from './slices/darkTheme/slice';
import moviesToCompareReducer from './slices/moviesToCompare/slice';
import authenticationReducer from './slices/authentication/slice';

const rootReducer = combineReducers({
   darkTheme: darkThemeReducer,
   moviesToCompare: moviesToCompareReducer,
   authentication: authenticationReducer,
});

export const rootStore = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type RootDispatch = typeof rootStore.dispatch;
