import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>hello 222</p>
            <button onClick={() => setCount(count+1)}>{count}</button>
        </div>
    )
}

export default Counter
