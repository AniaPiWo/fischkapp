import React, { useState } from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NewCard = ({ onSaveCard, deleteCard }) => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [isBack, setIsBack] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!front || !back) {
      toast("Please fill out both sides before saving!",{
        position:"top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    onSaveCard(front, back);
  };
  

  return (
    <div>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      {!isBack ? (
      <div id="new-card-front" className="card">
        <form required>
          <input
            id="set-front"
            value={front}
            onChange={(e) => setFront(e.target.value)}
            required
          />
        </form>
        <div className="button-box">
          <button className="btn-1" onClick={() => deleteCard()}>
            Cancel
          </button>
          <button className="btn-2" onClick={() => setIsBack(true)}>
            Next
          </button>
        </div>
      </div>) : (
      <div
        id="new-card-back"
        className="card"
        style={{ display: isBack ? "block" : "none" }}
      >
        <div className="card-word">{front}</div>
        <div className="trash-icon" onClick={() => deleteCard()}>
          <TrashIcon />
        </div>
        <form onSubmit={handleSave} required>
          <input 
            id="set-back" 
            value={back} 
            onChange={(e) => setBack(e.target.value)} 
            required
          />
        </form>
        <div className="button-box">
          <button className="btn-1" onClick={() => setIsBack(false)}>
            Back
          </button>
          <button className="btn-2" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>)}
    </div>
  );
};

