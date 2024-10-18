import React from "react";
import "./Card.css";

const Card = ({ colorname, color, setColor }) => {
  return (
    <div
      className="card"
      onClick={() =>
        setColor((prev) => (prev === colorname.color ? "" : colorname.color))
      }
      style={{
        backgroundColor: colorname.color,
      }}
    >
      <p>{colorname.color}</p>
    </div>
  );
};

export default Card;
