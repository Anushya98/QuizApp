// FactsSheet.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/FactSheet.css';

const FactsSheet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { facts } = location.state || {};
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const handleCloseClick = () => {
    // Navigate back to the programming page
    navigate(-1);
  };

  const handlePreviousClick = () => {
    if (currentFactIndex > 0) {
      setCurrentFactIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentFactIndex < facts.length - 1) {
      setCurrentFactIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="facts-sheet-container">
      <h2 className="facts-sheet-heading">Facts</h2>
      {facts && facts.length > 0 ? (
        <div className="fact-item">
          <div className="fact-number">{currentFactIndex + 1} of {facts.length}</div>
          <div className="fact-content">
            <h3 className="fact-title">{facts[currentFactIndex].fact}</h3>
            <p>{facts[currentFactIndex].description}</p>
          </div>
        </div>
      ) : (
        <p>No facts available for the current topic.</p>
      )}
      <div className="navigation-buttons">
        <div className="previous-next-buttons">
          <button className="previous-button" onClick={handlePreviousClick} disabled={currentFactIndex === 0}>
            Previous
          </button>
          <button className="nexts-button" onClick={handleNextClick} disabled={currentFactIndex === facts.length - 1}>
            Next
          </button>
        </div>
        <button className="close-button" onClick={handleCloseClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FactsSheet;
