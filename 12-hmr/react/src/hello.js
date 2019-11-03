import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>four</p>
      <button onClick={() => setCount(count+1)}>{count}</button>
    </div>
  )
}

export default hot(App);
