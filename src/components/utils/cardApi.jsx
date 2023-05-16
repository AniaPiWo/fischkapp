/* curl -X GET \
  http://139.59.154.199:49160/api/v1/fischkapp/flashcards */

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

  return (
    <div>
      {data ? (
        <ul>
          {data.map((card) => (
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
}

