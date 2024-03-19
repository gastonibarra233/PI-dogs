import React from "react";
import './Card.css'

const Card = ({ dog }) => {
  return (
    <div className="card">
      <img
        src={dog.image}
      />
      <p>{dog.breed.name}</p>
    </div>
  );
};

export default Card;
