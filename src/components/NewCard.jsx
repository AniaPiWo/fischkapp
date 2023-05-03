import React, { useState } from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";

export const NewCard = ({ onSaveCard, frontValue }) => {
  const [showBack, setShowBack] = useState(false);
  const [front, setFront] = useState(frontValue || "");

  const handleNextClick = () => {
    setShowBack(true);
  };

  const handleBackClick = () => {
    setShowBack(false);
  };

  const handleSaveClick = () => {
    onSaveCard(front, document.getElementById("set-back").value);
  };

  const handleFrontChange = (event) => {
    setFront(event.target.value);
  };

  return (
    <div>
      <div
        id="new-card-front"
        className="card"
        style={{ display: showBack ? "none" : "block" }}
      >
        <form>
          <input
            id="set-front"
            value={front}
            onChange={handleFrontChange}
          />
        </form>
        <div className="button-box">
          <button className="btn-1">Cancel</button>
          <button className="btn-2" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
      <div
        id="new-card-back"
        className="card"
        style={{ display: showBack ? "block" : "none" }}
      >
        <div className="card-word">Card-word</div>
        <div className="trash-icon">
          <TrashIcon />
        </div>
        <form>
          <input id="set-back" />
        </form>
        <div className="button-box">
          <button className="btn-1" onClick={handleBackClick}>
            Back
          </button>
          <button className="btn-2" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
