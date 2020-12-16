import React from "react";
import getImage from "./Icons";

const Card = ({ card, handleCardClick, index, previousSelected, started }) => {
  const cardClass =
    !previousSelected && started
      ? card.isMatched
        ? "front-face matched"
        : "front-face wrong"
      : card.isMatched
      ? "front-face matched"
      : "front-face";
  return (
    <div
      className={card.isFlipped ? "memory-card flip" : "memory-card"}
      onClick={card.isFlipped ? null : () => handleCardClick(index)}
    >
      <img className={cardClass} src={getImage(card.img)} alt={card.img} />
      <img className="back-face" src={getImage("backImg")} alt="back-img" />
    </div>
  );
};

export default Card;
