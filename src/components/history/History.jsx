import React from 'react';
import HistoryImage from '../../assests/history.png';
import "./style/style.css";
export const History = () => {
  return (
    <div className="history-container">
      <div className="history-left">
        <h2>Our Historrrry</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="history-right">
        <img src={HistoryImage} alt="Our History" />
      </div>
    </div>
  );
}

