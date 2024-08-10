import { describe, test, expect } from 'vitest';
import { getFormattedBudget } from '.';

describe('getFormattedBudget', () => {
   test('should format number with grouping for Czech locale', () => {
      const input = 1000000;
      const expectedOutput = '1 000 000'; // nebo '1 000 000' záleží na prostředí

      const result = getFormattedBudget(input);

      expect(result).toBe(expectedOutput);
   });

   test('should format small numbers correctly', () => {
      const input = 123;
      const expectedOutput = '123';

      const result = getFormattedBudget(input);

      expect(result).toBe(expectedOutput);
   });

   test('should format large numbers correctly', () => {
      const input = 9876543210;
      const expectedOutput = '9 876 543 210';

      const result = getFormattedBudget(input);

      expect(result).toBe(expectedOutput);
   });
});
