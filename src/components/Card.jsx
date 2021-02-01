import React from "react";
import reverseCard from "../assets/static/card.png";
import blankCard from "../assets/static/blank.jpg";
import "../assets/styles/BoardGame.scss";

const Card = (props) => {
  const { card, block } = props;

  const handleClick = (e) => {
    if (!card.status) {
      props.handleMatch(card);
    }
  };

  return (
    <button
      type="button"
      className={`card${card.status ? " flipped" : ""}`}
      onClick={handleClick}
      disabled={block}
    >
      {card.status ? (
        <>
          <img
            className="front"
            src={card.img ? card.img : blankCard}
            alt="card"
          />
        </>
      ) : (
        <>
          <img className="back" src={reverseCard} alt="card" />
        </>
      )}
    </button>
  );
};

export default Card;
