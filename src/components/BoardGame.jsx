/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Card from './Card';
import '../assets/styles/BoardGame.scss';

const queryCards = [
  { id: '1', value: '1', status: false },
  { id: '2', value: '2', status: false },
  { id: '3', value: '3', status: false },
  { id: '4', value: '4', status: false },
  { id: '5', value: '5', status: false },
  { id: '6', value: '6', status: false },
  { id: '7', value: '7', status: false },
  { id: '8', value: '8', status: false },
  { id: '9', value: '9', status: false },
  { id: '10', value: '1', status: false },
  { id: '11', value: '2', status: false },
  { id: '12', value: '3', status: false },
  { id: '13', value: '4', status: false },
  { id: '14', value: '5', status: false },
  { id: '15', value: '6', status: false },
  { id: '16', value: '7', status: false },
  { id: '17', value: '8', status: false },
  { id: '18', value: '9', status: false },
];

const BoardGame = () => {
  const [firstCard, setFirstCard] = useState('');
  const [secondCard, setSecondCard] = useState('');
  const [cards, setCards] = useState(queryCards);
  const [block, setBlock] = useState(false);

  const handleMatch = ({ id, value }) => {
    const newCards = cards.map((card) => {
      const newCard = {
        ...card,
        status: card.id === id || card.status,
      };
      return newCard;
    });
    setCards(newCards);
    if (firstCard === '') {
      setFirstCard(value);
    } else if (secondCard === '') {
      setSecondCard(value);
      if (firstCard === value) {
        console.log('Its a match!');
        setFirstCard('');
        setSecondCard('');
      } else {
        setBlock(true);
        setTimeout(() => {
          console.log('error :c');
          const newCards = cards.map((card) => {
            if (card.value === firstCard || card.value === value) {
              const newCard = {
                ...card,
                status: false,
              };
              return newCard;
            }
            return card;
          });
          setCards(newCards);
          setFirstCard('');
          setSecondCard('');
          setBlock(false);
        }, 2000);
      }
    } else {
      setFirstCard('');
      setSecondCard('');
    }
  };

  return (
    <div>
      <div className='boardGame'>
        {cards.map((card, i) => {
          return (
            // <Card key={i} className='card' />
            <Card
              key={i}
              card={card}
              firstCard={firstCard}
              secondCard={secondCard}
              block={block}
              handleMatch={handleMatch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoardGame;
