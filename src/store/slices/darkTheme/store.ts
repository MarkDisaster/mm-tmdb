import { configureStore } from '@reduxjs/toolkit';
import darkThemeReducer from './slice';

export const dartkThemeStore = configureStore({
   reducer: {
      darkTheme: darkThemeReducer,
   },
});

export type DartkThemeState = ReturnType<typeof dartkThemeStore.getState>;
export type DartkThemeDispatch = typeof dartkThemeStore.dispatch;
