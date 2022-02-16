import React from 'react';
import { render, screen } from '@testing-library/react';
import UniekApp from './UniekApp';

test('renders learn react link', () => {
  render(<UniekApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
