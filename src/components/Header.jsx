import React from "react";
import "../styles.css";
import { AddIcon } from "./AddIcon";

export const Header = ({ onAddCard }) => {
  const handleAddCard = () => {
    onAddCard();
  };

  return (
    <div id="app-header">
      <div className="title">
        fischkapp
        <div id="counter">0</div>
      </div>
      <button className="add-button" onClick={handleAddCard}>
        <AddIcon />
      </button>
    </div>
  );
};
