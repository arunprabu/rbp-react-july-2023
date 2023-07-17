// Where to write the test case? (here)
// How to write the test cases? (AAA)
// Let the tools do the testing

// Test Pattern: AAA (Arrange, Act, Assert)
// Arrage
import { render, screen } from '@testing-library/react'; // from  rtl
import UnitTestingDemoPage from './UnitTestingDemoPage';

// test case / test spec / test
it('has heading Unit Testing Examples!', () => {
  // Act
  render(<UnitTestingDemoPage />);
  const headingElement = screen.getByText('Unit Testing Examples!');
  // Assert
  expect(headingElement).toBeInTheDocument();
});
