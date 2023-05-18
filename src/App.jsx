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
    const fetchCards = async () => {
      try {
        const response = await fetch('https://training.nerdbord.io/api/v1/fischkapp/flashcards');
        const json = await response.json();
        setCards(json);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);


  const handleAddCard = () => {
    setShowNewCard(true);
  };

  const handleCancelCard = () => {
    setShowNewCard(false);
  };

  const handleSaveCard = async (front, back) => {
    try {
      const response = await fetch('https://training.nerdbord.io/api/v1/fischkapp/flashcards', {
        method: 'POST',
        headers: {
          'Authorization': 'secret_token',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ front, back }),
      });
      const newCard = await response.json();
      const updatedCardsResponse = await fetch('https://training.nerdbord.io/api/v1/fischkapp/flashcards');
      const updatedCardsJson = await updatedCardsResponse.json();
      setCards(updatedCardsJson);
      setShowNewCard(false);
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };
  

  const handleEditCard = async (_id, front, back) => {
    try {
      await fetch(`https://training.nerdbord.io/api/v1/fischkapp/flashcards/${_id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': 'secret_token',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ front, back }),
      });
      setCards(cards.map((card) => (card._id === _id ? { ...card, front, back } : card)));
      setEditCard(true);
    } catch (error) {
      console.error('Error editing card:', error);
    }
  };

  const deleteCard = async (_id) => {
    try {
      await fetch(`https://training.nerdbord.io/api/v1/fischkapp/flashcards/${_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'secret_token',
          'Content-Type': 'application/json',
        },
      });
      setCards(cards.filter((card) => card._id !== _id));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };
  
  
  return (
    <div className="app">
      <Header onAddCard={handleAddCard} cardsCount={cards.length}/>
        {showNewCard ? (
    <NewCard
      onSaveCard={handleSaveCard}
      deleteCard={handleCancelCard}
    />
  ) : null}

    <div className="cards-list">
      {cards.slice().reverse().map((card) => (
      <Card
        key={card._id}
        front={card.front}
        back={card.back}
        deleteCard={() => deleteCard(card._id)}
        onEdit={(newFront, newBack) => handleEditCard(card._id, newFront, newBack)}
      />
    ))}
    </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));




