import React from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";

export const NewCard = () => {
    
    return (

    <div>
        <div id="new-card" className="new-card front">
            <form action="">
                <input defaultValue="Card front ..." />
            </form>
            <div className="button-box">
                <button className="btn-1">Cancel</button>
                <button className="btn-2">Next</button>
            </div>
        </div>
        <div id="new-card" className="new-card back">
            <div className="card-word">Card-word</div>
            <div className="trash-icon"> 
                <TrashIcon />
            </div>
            <form action="">
                <input defaultValue="Card back ..." />
            </form>
            <div className="button-box">
                <button className="btn-1">Back</button>
                <button className="btn-2">Save</button>
            </div>
        </div>
    </div>
    )
}
