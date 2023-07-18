import { useState } from 'react';

const Counter = () => {
  const [ticker, setTicker] = useState(0);

  const handleIncrement = () => {
    setTicker(ticker + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="counterValue">Counter Value: {ticker}</p>
      <button
        type="button"
        data-testid="incrementBtn"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        Increment
      </button>

      {/* TODO: Work on Decrement */}
    </div>
  );
};

export default Counter;
