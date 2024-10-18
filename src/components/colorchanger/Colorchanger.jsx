import React, { useState } from 'react';
import Card from '../Card/Card';
import Background from '../background/Background'; 
import "./Colorchanger.css"// Don't forget to import Background!

function Colorchanger() {
  const [color, setColor] = useState(""); 

  const colorname = {
    black: { color: 'black' },
    red: { color: 'red' },
    green: { color: 'green' },
    blue: { color: 'blue' },
    pink: { color: 'pink' },
    white: { color: 'white' },
    orange: { color: 'orange' },
    yellow: { color: 'yellow' },
  };

  return (
    <>
      {color && <Background colorname={color} />}
      <div className="card-container">
        {Object.keys(colorname).map((key, index) => (
          <Card color={color} setColor={setColor} key={index} colorname={colorname[key]} />
        ))}
      </div>
    </>
  );
}

export default Colorchanger;
