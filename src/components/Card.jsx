import React, { useState } from 'react';
import reverseCard from '../assets/static/card.png';
import blankCard from '../assets/static/blank.jpg';
import '../assets/styles/BoardGame.scss';

const Card = () => {
  const [flip, setFlip] = useState(false);

  const handleClick = (e) => {
    setFlip(!flip);
    console.log(flip);
  };

  return (
    <button type='button' className='card' onClick={handleClick}>
      {flip ? (
        <img src={blankCard} alt='card' />
      ) : (
        <img src={reverseCard} alt='card' />
      )}
    </button>
  );
};

export default Card;
