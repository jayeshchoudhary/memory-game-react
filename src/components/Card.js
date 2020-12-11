import React from "react";
import getImage from "./Icons";

const Card = ({ card, handleCardClick, index }) => {
  return (
    <div
      className={card.isFlipped ? "memory-card flip" : "memory-card"}
      onClick={card.isMatched ? null : () => handleCardClick(index)}
    >
      <img className="front-face" src={getImage(card.img)} alt={card.img} />
      <img className="back-face" src={getImage("backImg")} alt="back-img" />
    </div>
  );
};

export default Card;
