import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  useEffect(() => {
    alert('You have increment the value.');
  }, [increment]);
  
  useEffect(() => {
    alert('You have Count the value.');
  }, [count]);
  return (
    <>
      <div>The Count is {count}</div>
      <button onClick={() => { setCount(count + 2) }}>Update Count</button>

      <div>The Increment is {increment}</div>
      <button onClick={() => { setIncrement(increment + 1) }}>Update Value</button>
    </>
  );
}
export default App;
