/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import Card from "./Card";
import "../assets/styles/BoardGame.scss";
import Loader from "./Loader";
import Life from "./Life";

const defaultCards = [
  { id: "1", value: "1", status: false },
  { id: "2", value: "2", status: false },
  { id: "3", value: "3", status: false },
  { id: "4", value: "4", status: false },
  { id: "5", value: "5", status: false },
  { id: "6", value: "6", status: false },
  { id: "7", value: "7", status: false },
  { id: "8", value: "8", status: false },
  { id: "9", value: "9", status: false },
  { id: "10", value: "1", status: false },
  { id: "11", value: "2", status: false },
  { id: "12", value: "3", status: false },
  { id: "13", value: "4", status: false },
  { id: "14", value: "5", status: false },
  { id: "15", value: "6", status: false },
  { id: "16", value: "7", status: false },
  { id: "17", value: "8", status: false },
  { id: "18", value: "9", status: false },
];

const BoardGame = () => {
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");
  const [cards, setCards] = useState(defaultCards);
  const [life, setLife] = useState(4000);
  const [block, setBlock] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const queryCards = [];
      for (let i = 0; i < 9; i++) {
        try {
          // El motivo de porque las consultas están de
          // forma ineficiente es porque queremos que
          // las consultas sucedan lentamente, para evitar
          // problemas con la api, ya que exigen
          // que las imagenes sean consultadas una por una...
          // eslint-disable-next-line no-await-in-loop
          const result = await axios(
            "https://db.ygoprodeck.com/api/v7/randomcard.php"
          );
          // eslint-disable-next-line no-await-in-loop
          const img = await axios
            .get(result.data.card_images[0].image_url, {
              responseType: "arraybuffer",
            })
            .then((response) => {
              const b64 = Buffer.from(response.data, "binary").toString(
                "base64"
              );
              return `data:image/png;base64,${b64}`;
            })
            .catch((error) => {
              throw new Error(error);
            });
          const cardObj = {
            id: i,
            value: i,
            status: false,
            img,
          };
          const cardObjCopy = {
            id: i + 9,
            value: i,
            status: false,
            img,
          };
          queryCards.push(cardObj);
          queryCards.push(cardObjCopy);
        } catch (error) {
          console.log(error);
        }
      }
      queryCards.sort(() => Math.random() - 0.5);
      setCards(queryCards);
      setLoading(false);
      return queryCards;
    };
    fetchCards();
  }, []);

  const handleMatch = ({ id, value }) => {
    const newCards = cards.map((card) => {
      const newCard = {
        ...card,
        status: card.id === id || card.status,
      };
      return newCard;
    });
    setCards(newCards);
    if (firstCard === "") {
      setFirstCard(value);
    } else if (secondCard === "") {
      setSecondCard(value);
      if (firstCard === value) {
        console.log("Its a match!");
        let flag = true;
        newCards.forEach((card) => {
          if (card.status === false) {
            flag = false;
          }
        });
        if (flag) {
          alert("you WON!");
        }
        setFirstCard("");
        setSecondCard("");
      } else {
        setBlock(true);
        console.log(life)
        setLife(life-200);
        setTimeout(() => {
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
          setFirstCard("");
          setSecondCard("");
          setBlock(false);
        }, 1750);
      }
    } else {
      setFirstCard("");
      setSecondCard("");
    }
  };

  return (
    <div>
        <Life life={life} />
      <div className="boardGame">
        {loading ? (
          <Loader />
        ) : (
          cards.map((card, i) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default BoardGame;
