import React from 'react';
import './App.css';
import { Debounce } from './components/Debounce';

const App = () => {
  const handleSearch = (value: string) => {
    // Perform search operation with the value
    console.log('Searching for:', value);
  };
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Debounce delay={5000} callback={handleSearch} />
    </div>
  );
}

export default App;
