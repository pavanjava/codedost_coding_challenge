import React, { useState } from 'react';
import './App.css';

const App = () => {

  let [data, setData] = useState(['play cricket', 'play video game', 'read book']);
  let [checkboxData, setCheckboxData] = useState(Object);

  const deleteItemHandler = (index: number) => {
    const updatedArr = [...data];
    if(checkboxData[index]){
      updatedArr.splice(index, 1);
      setData(updatedArr);
    }
  }

  const handleChckboxClick = (value: boolean, index: number) => {
    checkboxData[index] = value
    setCheckboxData(checkboxData);
  }

  const createList = (list: string[]): any => {
    return (
      <ul>
        {list.map((item: string, index: number) => (
          <li key={index}>
            <input type='checkbox' onChange={(e) => handleChckboxClick(e.target.checked, index)}></input>
            {item} <button onClick={() => deleteItemHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      { createList(data) }
    </div>
  );
}

export default App;
