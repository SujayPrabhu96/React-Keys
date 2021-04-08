import React from "react";
import "./App.css";

const Card = ({ image, text }) => {
  return (
    <div className="card-container">
      <img src={image} />
      <p className="card-title">{text}</p>
    </div>
  );
};

export default Card;
