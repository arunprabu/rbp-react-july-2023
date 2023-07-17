// Arrange
import { render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';

// test spec / test case / test
it('has Company Info | Testing Props text', () => {
  // Act
  render(<CompanyInfo />);
  const headingElement = screen.getByText('Company Info | Testing Props');
  // Assert -- must
  expect(headingElement).toBeTruthy();
});

// it, expect, toBeTruthy are coming from JEST
// toBeInTheDocument(), toBeTruthy() are called as matchers
