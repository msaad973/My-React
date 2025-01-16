import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h3 style={{ color: 'red', textAlign: 'center' }}>Advanced React</h3>
      <div className='card'>
        <button onClick={() => setCount(prevCount => prevCount + 1)} >count is {count}</button>

      </div>


    </>
  );
}
export default App;
