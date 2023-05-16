import React, { useEffect, useState } from 'react';
import { Card } from '../Card';

export const CardsApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://139.59.154.199:49160/api/v1/fischkapp/flashcards');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const deleteCard = async (cardId) => {
    try {
      await fetch(`http://139.59.154.199:49160/api/v1/fischkapp/flashcards/${cardId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'secret_token',
            'Content-Type': 'application/json',
        },
      });
      setData(data.filter((card) => card.id !== cardId));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };


  const addCard = async (front, back) => {
    try {
      const response = await fetch('http://139.59.154.199:49160/api/v1/fischkapp/flashcards', {
        method: 'POST',
        headers: {
            'Authorization': 'secret_token',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ front, back }),
      });
      const newCard = await response.json();
      setData([...data, newCard]);
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  const editCard = async (cardId, front, back) => {
    try {
      await fetch(`http://139.59.154.199:49160/api/v1/fischkapp/flashcards/${cardId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': 'secret_token',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ front, back }),
      });
      setData(data.map((card) => (card.id === cardId ? { ...card, front, back } : card)));
    } catch (error) {
      console.error('Error editing card:', error);
    }
  };
  

  return (
    <div>
      {data ? (
        <ul>
          {data.slice().reverse().map((card) => (
            <Card
              key={card.id}
              front={card.front}
              back={card.back}
              deleteCard={() => deleteCard(card.id)}
              onEdit={(newFront, newBack) => handleEditCard(card.id, newFront, newBack)}
            />
          ))}
        </ul>
      ) : (
        <p className="cards-list">Loading data...</p>
      )}  


    </div>
  );
};


  