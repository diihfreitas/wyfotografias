import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from './Home.jsx';

expect.extend(toHaveNoViolations);

describe('Home', () => {
  it('renderiza o título principal', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Williane Yale/i })).toBeInTheDocument();
  });

  it('não possui violações de acessibilidade', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 