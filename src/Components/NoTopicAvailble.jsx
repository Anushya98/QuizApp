// NoTopicAvailable.js
import React from 'react';
import './styles/Topic.css';

const NoTopicAvailable = ({ onGenerateTopic, onRequestAnalysis }) => {
  return (
    <div className="no-topic-container">
      <h2>No Topic Available</h2>
      <p>Sorry, the entered topic is not available.</p>
      
      <button className="generate-button" onClick={onGenerateTopic}>
        Generate Topic Now
      </button>
      <button className="request-button" onClick={onRequestAnalysis}>
        Request Analysis
      </button>
    </div>
  );
};

export default NoTopicAvailable;
