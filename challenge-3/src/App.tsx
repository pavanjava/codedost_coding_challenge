import React, { useState } from 'react';
import './App.css';

function App() {
  const [circles, setCircles]: any[] = useState([]);
  const [temp, setTemp]: any[] = useState([]);

  const handleMouseClick = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const newCircle = {
      x: clientX,
      y: clientY,
      radius: 10,
    };
    setCircles([...circles, newCircle]);
  };

  const handleUndo = () => {
    const obj = circles.pop();
    setCircles([...circles]);
    setTemp([...temp, obj]);
  }

  const handleRedo = () => {
    const circle = temp.pop();
    setCircles([...circles, circle]);
  }

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <svg
        onClick={handleMouseClick}
        style={{ border: '1px solid black' }}
        width="1920"
        height="1080"
      >
        {circles.map((circle: any, index: number) => (
          <circle
            key={index}
            cx={circle.x}
            cy={circle.y}
            r={circle.radius}
            fill="red"
          />
        ))}
      </svg>
    </>
  );
}

export default App;
