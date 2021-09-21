import { useState } from 'react';

const Count = ()=> {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
};

export default Count;