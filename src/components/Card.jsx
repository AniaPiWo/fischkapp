import React, { useState } from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";
import { PencilIcon } from "./PencilIcon.jsx";
import ReactCardFlip from "react-card-flip";

export const Card = ({ front, back, deleteCard }) => {
  const [isBack, setIsBack] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleSideSwitch = () => {
    setIsBack(!isBack);
    setIsEdit(false);
  };

  const handleCardEdit = (event) => {
    event.stopPropagation();
    setIsEdit(true);
    setIsBack(true);
  };

  const handleCancelEdit = (event) => {
    event.stopPropagation();
    setIsBack(false);
    setIsEdit(false);
  };

  const handleSaveEdit = (event) => {
    event.stopPropagation();
    setIsBack(false);
    setIsEdit(false);
  };

  const handleDeleteCard = (event) => {
    event.stopPropagation();
    deleteCard();
  };

  return (
    <div className="flip-card">
      <div onClick={handleSideSwitch}>
        <ReactCardFlip isFlipped={isBack} flipDirection="horizontal">
          <div id="card-front" className="card read-mode">
            <div className="pencil-icon" onClick={handleCardEdit}>
              <PencilIcon />
            </div>
            <div>
              <p>{front}</p>
            </div>
          </div>
          {isEdit && isBack ? (
            <div className="card edit-mode">
              <div className="trash-icon" onClick={handleDeleteCard}>
                <TrashIcon />
              </div>
              <div>
                <input defaultValue={back} />
              </div>
              <div className="button-box">
                <button className="btn-1" onClick={handleCancelEdit}>
                  Cancel
                </button>
                <button className="btn-2" onClick={handleSaveEdit}>
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="card read-mode">
              <p>{back}</p>
            </div>
          )}
        </ReactCardFlip>
      </div>
    </div>
  );
};
