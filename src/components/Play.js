import React, { useState } from 'react';

export default function Play() {
  const [count, updateCount] = useState(0);
  const [input, updateInput] = useState('');

  const handleCount = () => updateCount(prevCount => prevCount + 1);
  const handleInputChange = ({ target }) => updateInput(target.value);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>Add</button>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <p>{input}</p>
    </>
  );
}
