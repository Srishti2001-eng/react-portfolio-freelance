import React from "react";
import "./Cards.css";

const Card = ({ imgsrc, link }) => {
  return (
    <div className="Profile-container">
      <div className="Profile-cards">
        <div className="Profile-card-img">
          <img src={imgsrc} alt="mypic" className="card_img" />
          <a href={link} target="_blank">
          <button className="Profile-button slide-in">View Page </button>
        </a>
        </div>

        
      </div>
    </div>
  );
};
export default Card;
