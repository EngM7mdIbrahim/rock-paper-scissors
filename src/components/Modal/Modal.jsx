import React from "react";
import "./Modal.css";

//images
import rulesImage from "../../images/image-rules.svg";
import closeIcon from "../../images/icon-close.svg";

export default function Modal({ isOpen = true, onClose }) {

    const test = ()=>{console.log("Clicked")};
  return (
    <div className={`background-container ${isOpen ? "isOpen" : ""}`}>
      <div className="modal-container">
        <img id="close-img" src={closeIcon} alt="Close" onClick={onClose} />
        <h1>Rules</h1>
        <img id="rules-img" src={rulesImage} alt="Rules"  />
      </div>
    </div>
  );
}
