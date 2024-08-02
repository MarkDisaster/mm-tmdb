import { combineReducers, configureStore } from '@reduxjs/toolkit';
import darkThemeReducer from './slices/darkTheme/slice';
import moviesToCompareReducer from './slices/moviesToCompare/slice';
import authenticationReducer from './slices/authentication/slice';
import userInfoReducer from './slices/userInfo/slice';

const rootReducer = combineReducers({
   darkTheme: darkThemeReducer,
   moviesToCompare: moviesToCompareReducer,
   authentication: authenticationReducer,
   userInfo: userInfoReducer,
});

export const rootStore = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type RootDispatch = typeof rootStore.dispatch;
