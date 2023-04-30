import React from "react";
import "../styles.css";
import { AddIcon } from "./AddIcon";

export const Header = () => {
    
    return (
        <div id="app-header">
            <div className="title">
                fischkapp
                <div id="counter">0</div>
            </div>
            <button className="add-button">
                <AddIcon />
            </button>
        </div>
    )
}
