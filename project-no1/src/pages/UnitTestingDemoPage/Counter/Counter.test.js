import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  // Testing state with initial value
  it('has counter with initial value 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');
  });

  // Test events and state
  it('has properly working increment button', () => {
    render(<Counter />);
    // checking intial counter value
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');

    // find out increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // let's click this button through program
    // trigger the click event through RTL
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 3');
  })
});
