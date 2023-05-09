import React, { useState } from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";
import { PencilIcon } from "./PencilIcon.jsx";
import ReactCardFlip from "react-card-flip";

export const Card = ({ id, front, back, deleteCard, onEdit }) => {
  const [newFront, setNewFront] = useState(front);
  const [newBack, setNewBack] = useState(back);
  const [isBack, setIsBack] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleSideSwitch = () => {
    if (!isEdit) {
      setIsBack(!isBack);
    }
  };

  const handleSaveEdit = (newFront, newBack) => {
    onEdit(newFront, newBack);
    setIsEdit(false);
  };
  

  const handleEdit = (event) => {
    event.stopPropagation()
    setIsEdit(true)
  }

  return (
    <div className="flip-card" onClick={handleSideSwitch}>
      <ReactCardFlip
        isFlipped={isBack}
        flipDirection="horizontal"
      >
      {isEdit && !isBack ? (
      <div id="card-front" className="card edit-mode">
        <div className="card-word">{newBack}</div>
          <div className="trash-icon" onClick={deleteCard}>
            <TrashIcon />
          </div>
          <div>
            <input value={newFront} onChange={(e) => setNewFront(e.target.value)} />
          </div>
        <div className="button-box">  
          <button className="btn-1" onClick={() => setIsEdit(false)}>Cancel</button>       
          <button className="btn-2" onClick={() => handleSaveEdit(newFront, newBack)}>Save</button>
        </div>
      </div>) : (
        <div id="card-front" className="card read-mode">
        <div className="pencil-icon" onClick={handleEdit}>
          <PencilIcon />
        </div>
        <div>
          <p>{front}</p>
        </div>
      </div>
      )}

      {isEdit && isBack ? (
      <div id="card-back" className="card edit-mode">
      <div className="card-word">{newFront} </div>
      <div className="trash-icon" onClick={deleteCard}>
            <TrashIcon />
          </div>
        <div>
          <input value={newBack} onChange={(e) => setNewBack(e.target.value)} />
        </div>
        <div className="button-box">
          <button className="btn-1" onClick={() => setIsEdit(false)}>Cancel</button>
          <button className="btn-2" onClick={() => handleSaveEdit(newFront, newBack)}>Save</button>
        </div>
      </div>) : (
        <div id="card-back" className="card read-mode">
        <div className="pencil-icon" onClick={handleEdit}>
          <PencilIcon />
        </div>
        <div>
          <p>{back}</p>
        </div>
      </div>
      )}

      </ReactCardFlip>
    </div>
  );
};

