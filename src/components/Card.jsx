import React, { useState } from "react";
import reverseCard from "../assets/static/card.png";
import blankCard from "../assets/static/blank.jpg";
import "../assets/styles/BoardGame.scss";

const Card = (props) => {
  const [flip, setFlip] = useState(false);

  const handleClick = (e) => {
    if (!props.card.status) {
      setFlip(!flip);
      props.handleMatch(props.card);
    }
  };

  return (
    <button
      type="button"
      className={`card${flip ? " flipped" : ""}`}
      onClick={handleClick}
    >
      {flip ? (
        <img className="front" src={blankCard} alt="card" />
      ) : (
        <img className="back" src={reverseCard} alt="card" />
      )}
    </button>
  );
};

export default Card;
