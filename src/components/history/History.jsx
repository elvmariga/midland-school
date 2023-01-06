import React from 'react';
import HistoryImage from '../../assests/history.png';
import "./style/style.css";
export const History = () => {
  return (
    <div className="history-container">
      <div className="history-left">
        <h2>Our History</h2>
        <p>
          The best primary school in our town, and it has
          been a cornerstone of the community ever since it started. Generations of
          children have passed through its doors, learning the fundamental
          skills that have helped them grow and succeed in life.
        </p>
      </div>
      <div className="history-right">
        <img src={HistoryImage} alt="Our History" />
      </div>
    </div>
  );
}

