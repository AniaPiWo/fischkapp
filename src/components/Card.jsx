import React, {useState} from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";
import { PencilIcon } from "./PencilIcon";

export const Card = ({front, back}) => {

const [showBack, setShowBack] = useState(false);


const handleSideSwitch = () => {
    (!showBack) ? setShowBack(true) : setShowBack(false);
  };

    return (

    <div onClick={handleSideSwitch}>
        <div 
          id="card-front" 
          className="card front"
          style={{ display: showBack ? "none" : "block" }}> 
                <PencilIcon />       
            <div><p>{front}</p></div>
        </div>
        <div 
          id="card-back" 
          className="card back"
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
    )
}

