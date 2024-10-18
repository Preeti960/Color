import React from 'react';
import "./Background.css"

const Background = ({ colorname }) => {
  return (
    <div className='background-div'
      style={{
       
        backgroundColor: colorname, // Use the passed colorname prop
       
      }}
    />
  );
};

export default Background;
