import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header.jsx";
import { NewCard } from "./components/NewCard.jsx";
import { Card } from "./components/Card.jsx";
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
    const newCard = { front, back };
    setCards([...cards, newCard]);
    setShowNewCard(false);
  };

  return (
    <div className="app">
      <Header onAddCard={handleAddCard} />
      {showNewCard ? <NewCard onSaveCard={handleSaveCard} /> : null}
      <div className="cards-list">
        {cards.map((card, index) => (
          <Card key={index} front={card.front} back={card.back} />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


