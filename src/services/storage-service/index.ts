import { STORAGE_PREFIX } from './constants';

class LocalStorageService {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   static setItem(key: string, value: any): void {
      try {
         const serializedValue = JSON.stringify(value); // Konverze hodnoty na JSON řetězec
         localStorage.setItem(`${STORAGE_PREFIX}_${key}`, serializedValue);
      } catch (err) {
         console.error('Could not save value to localStorage', err);
      }
   }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   static getItem(key: string): any {
      try {
         const serializedValue = localStorage.getItem(
            `${STORAGE_PREFIX}_${key}`,
         );
         if (serializedValue) {
            return JSON.parse(serializedValue);
         }
      } catch (err) {
         console.error('Could not load value from localStorage', err);
      }
      return null;
   }

   static removeItem(key: string): void {
      try {
         localStorage.removeItem(`${STORAGE_PREFIX}_${key}`);
      } catch (err) {
         console.error('Could not remove value from localStorage', err);
      }
   }

   static clearStorage(): void {
      try {
         localStorage.clear();
      } catch (err) {
         console.error('Could not clear localStorage', err);
      }
   }
}

export default LocalStorageService;
