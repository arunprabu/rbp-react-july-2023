// AAA
// arrange
import { render, screen } from '@testing-library/react';
import App from './App';

// test spec / test case / test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test and expect from JEST
