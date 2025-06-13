import { useState } from 'react';

function Count({ count }) {
    return (
        <h1>{count}</h1>
    );
}

function Button({ setCount }) {
    return (
        <button onClick={() => setCount(c => c + 1)}>Add 1!</button>
    );
}

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? 'It\'s higher than 10!' : 'Keep counting...';

  return (
      <div className="counter-wrapper">
          <Count count={count} />
          <p>{feedback}</p>
          <Button setCount={setCount} />
      </div>
  );
}

export default Counter;