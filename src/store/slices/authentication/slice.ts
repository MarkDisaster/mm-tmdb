import { createSlice } from '@reduxjs/toolkit';

export const initialState: boolean = false;

const authenticationSlice = createSlice({
   name: 'authentication',
   initialState,
   reducers: {
      setLoggedIn: () => true,
      setLoggedOut: () => false,
   },
});

export const { setLoggedIn, setLoggedOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
