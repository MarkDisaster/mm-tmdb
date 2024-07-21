import { createSlice } from '@reduxjs/toolkit';

export const initialState: boolean = false;

const darkThemeSlice = createSlice({
   name: 'darkTheme',
   initialState,
   reducers: {
      toggleDarkTheme: (state) => !state,
   },
});

export const { toggleDarkTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
