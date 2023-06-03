import React, { useState } from 'react';
import './App.css';
import { Child } from './Child';

export const CounterContext = React.createContext<any>(null);

const Parent = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <CounterContext.Provider value={{handleIncrement, handleReset}}>
        <Child />
        <h4>{count}</h4>
      </CounterContext.Provider>
      
    </div>
  );
}

export default Parent;
