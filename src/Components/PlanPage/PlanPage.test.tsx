import React from 'react';
import { render, screen } from '@testing-library/react';
import PlanPage from './PlanPage';

test('renders learn react link', () => {
  render(<PlanPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
