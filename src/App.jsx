import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header.jsx";
import { NewCard } from "./components/NewCard.jsx";
import { Card } from "./components/Card.jsx";
import { nanoid } from "nanoid";
import { CardsApi } from "./components/utils/cardApi.jsx"
import "./styles.css";

const App = () => {
  const [showNewCard, setShowNewCard] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardsFromStorage = JSON.parse(localStorage.getItem("cards"));
    if (cardsFromStorage) {
      setCards(cardsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleAddCard = () => {
    setShowNewCard(true);
  };

  const handleSaveCard = (front, back) => {
    const newCard = { id: nanoid(), front, back };
    setCards([...cards, newCard]);
    setShowNewCard(false);
  };

  const handleEditCard = (id, newFront, newBack) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, front: newFront, back: newBack };
      }
      return card;
    });
    setCards(updatedCards);
  };
  
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
    console.log(cards.length);
  
    if (!id) {
      setShowNewCard(false);
    }
  };
  
  return (
    <div className="app">
      <Header onAddCard={handleAddCard} cardsCount={cards.length}/>
      {showNewCard ? (
      <NewCard
        onSaveCard={handleSaveCard}
        deleteCard={deleteCard}
      />
    ) : null}

      <div className="cards-list">
        {cards.slice().reverse().map((card) => (
        <Card
          key={card.id}
          front={card.front}
          back={card.back}
          deleteCard={() => deleteCard(card.id)}
          onEdit={(newFront, newBack) => handleEditCard(card.id, newFront, newBack)}
        />
        ))}
      </div>
      <CardsApi/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


