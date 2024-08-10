import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutAppPage from '.';

describe('Renders main page correctly', async () => {
   it('Should render the page correctly', async () => {
      render(<AboutAppPage />);
      const buttonCount = await screen.findByTestId('CContainer');
      expect(buttonCount).toBeInTheDocument();
   });
});
