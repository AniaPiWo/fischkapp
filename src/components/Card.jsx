import React, {useState, useRef} from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";
import { PencilIcon } from "./PencilIcon.jsx";
import ReactCardFlip from "react-card-flip";


export const Card = ({ front, back }) => {
  const [isBack, setShowBack] = useState(false);


  const handleSideSwitch = () => {
    setShowBack(!isBack);
  };

  return (
    <div className="flip-card">
      <div onClick={handleSideSwitch}>
        <ReactCardFlip isFlipped={isBack} flipDirection="horizontal">
            <div id="card-front" className="card read-mode">
                <div className="pencil-icon">
        <PencilIcon />
      </div>
      <div>
        <p>{front}</p>
      </div>
    </div>
    <div id="card-back" className="card read-mode">
      <div>
        <p>{back}</p>
      </div>
    </div>
  </ReactCardFlip>
</div>

    </div>
  );
};


 

{/* 
Card Edit
<div onClick={handleSideSwitch}>
<div 
  id="card-front" 
  className="card front"
  style={{ display: showBack ? "none" : "block" }}> 
    <div className="trash-icon"> 
        <TrashIcon />
    </div>     
    <div><p>{front}</p></div>
</div>
<div 
  id="card-back" 
  className="card"
  style={{ display: showBack ? "block" : "none" }}>
    <div className="trash-icon"> 
        <TrashIcon />
    </div>
    <div><p>{back}</p></div>
    <div className="button-box">
        <button className="btn-1">Cancel</button>
        <button className="btn-2">Save</button>
    </div>
</div>
</div>
 */}
