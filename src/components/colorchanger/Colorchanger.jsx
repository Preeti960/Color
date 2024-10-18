import React, { useState } from 'react';
import Card from '../Card/Card';
import Background from '../Background/Background';
import "./Colorchanger.css"

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
    <div className='row'>
    {color && <Background colorname={color} />}
      <div className="card-container col-sm-12 ">
        {Object.keys(colorname).map((key, index) => (
          <Card color={color} setColor={setColor} key={index} colorname={colorname[key]} />
        ))}
      </div>

    </div>
      
    </>
  );
}

export default Colorchanger;
