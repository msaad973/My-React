import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert('you clicked me');
  })
  return (
    <>
     <div>The Count is {count}</div>
     <button onClick={()=>{setCount(count+2)}}>Update Count</button>

    </>
  );
}
export default App;
