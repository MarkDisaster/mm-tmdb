import { describe, test, expect } from 'vitest';
import { getFormattedDate } from '.';

describe('getFormattedDate', () => {
   test('should format a valid date string correctly', () => {
      const input = '2023-08-10T14:48:00.000Z';
      const expectedOutput = '2023-08-10';

      const result = getFormattedDate(input);

      expect(result).toBe(expectedOutput);
   });

   test('should handle date strings without time part correctly', () => {
      const input = '2023-08-10';
      const expectedOutput = '2023-08-10';

      const result = getFormattedDate(input);

      expect(result).toBe(expectedOutput);
   });

   test('should handle invalid date string by returning "Invalid Date"', () => {
      const input = 'invalid-date';
      const result = getFormattedDate(input);

      expect(result).toBe('-');
   });

   test('should handle empty string input', () => {
      const input = '';
      const result = getFormattedDate(input);

      expect(result).toBe('-');
   });
});
