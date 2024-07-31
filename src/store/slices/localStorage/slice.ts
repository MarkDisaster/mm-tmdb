import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_PREFIX } from './constants';

// Funkce pro načtení hodnoty z localStorage podle klíče
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loadValueFromLocalStorage = (key: string): any => {
   try {
      const serializedValue = localStorage.getItem(`${STORAGE_PREFIX}_${key}`);
      if (serializedValue) {
         return JSON.parse(serializedValue);
      }
   } catch (err) {
      console.error('Could not load value from localStorage', err);
   }
   return null;
};

// Funkce pro uložení hodnoty do localStorage podle klíče
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveValueToLocalStorage = (key: string, value: any) => {
   try {
      const serializedValue = JSON.stringify(value); // Konverze hodnoty na JSON řetězec
      localStorage.setItem(`${STORAGE_PREFIX}_${key}`, serializedValue);
   } catch (err) {
      console.error('Could not save value to localStorage', err);
   }
};

// Funkce pro odstranění hodnoty z localStorage podle klíče
const removeValueFromLocalStorage = (key: string) => {
   try {
      localStorage.removeItem(key);
   } catch (err) {
      console.error('Could not remove value from localStorage', err);
   }
};

const localStorageSlice = createSlice({
   name: 'localStorage',
   initialState: {},
   reducers: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setItem: (_, action: PayloadAction<{ key: string; value: any }>) => {
         const { key, value } = action.payload;
         saveValueToLocalStorage(key, value);
         return '';
      },
      getItem: (_, action: PayloadAction<string>) => {
         const key = action.payload;
         return loadValueFromLocalStorage(key);
      },
      removeItem: (_, action: PayloadAction<string>) => {
         const key = action.payload;
         removeValueFromLocalStorage(key);
         return '';
      },
      clearStorage: () => {
         localStorage.clear();
         return '';
      },
   },
});

export const { setItem, getItem, removeItem, clearStorage } =
   localStorageSlice.actions;

export default localStorageSlice.reducer;
