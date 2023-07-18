// Arrange
import { render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';

// TEST SUITE = group of related test specs
describe('CompanyInfo', () => {
  // test spec / test case / test
  it('has `Company Info | Testing Props` text', () => {
    // Act
    render(<CompanyInfo />);
    const headingElement = screen.getByText('Company Info | Testing Props');
    // Assert -- must
    expect(headingElement).toBeTruthy();
  });

  // test spec
  it('receives companyName props from Parent Comp', () => {
    render(<CompanyInfo companyName="ABC Corp123" />);
    const companyName = screen.getByTestId('companyName')
    expect(companyName).toBeInTheDocument();
    expect(companyName.textContent).toBe('Company Name: ABC Corp123');
  });
});

// it, expect, toBeTruthy are coming from JEST
// toBeInTheDocument(), toBeTruthy() are called as matchers
