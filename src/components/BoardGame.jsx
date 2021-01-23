/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from './Card';
import '../assets/styles/BoardGame.scss';

const cards = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

const BoardGame = () => {
  return (
    <div>
      <div className='boardGame'>
        {cards.map((card, i) => {
          return (
            <Card key={i} className='card' />
          );
        })}
      </div>
    </div>
  );
};

export default BoardGame;
