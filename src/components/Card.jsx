import React from "react";
import "../styles.css";
import { TrashIcon } from "./TrashIcon";
import { PencilIcon } from "./PencilIcon";

export const Card = () => {
    
    return (

    <div>
        <div id="card" className="card front"> 
            <PencilIcon />       
            <p>Schmetterling</p>
        </div>
        <div id="card" className="card">
            <div className="trash-icon"> 
                <TrashIcon />
            </div>
                <p>Motyl</p>
            <div className="button-box">
                <button className="btn-1">Cancel</button>
                <button className="btn-2">Save</button>
            </div>
        </div>
    </div>
    )
}
