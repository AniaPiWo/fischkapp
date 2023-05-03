import React, { useEffect, useState } from "react";
import "../styles.css";
import { AddIcon } from "./AddIcon";

export const Header = ({ onAddCard, cardsCount }) => {

  const handleAddCard = () => {
    onAddCard();
  };

  return (
    <div id="app-header">
      <div className="title">
        fischkapp
        <div id="counter">{cardsCount}</div>
      </div>
      <button className="add-button" onClick={handleAddCard}>
        <AddIcon />
      </button>
    </div>
  );
};
