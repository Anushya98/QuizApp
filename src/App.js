import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/Register';
import Topic from './Components/Topic';
import TopicsPage from './Components/Topicspage';
import NoTopicAvailable from './Components/NoTopicAvailble';
import QuizPage from './Components/QuizPage';
import FactsPage from './Components/FactsSheet';

function App() {
  return (
    // <div>
    //   <QuizPage />
    // </div >

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/topicspage/:topic" element={<TopicsPage />} />
        <Route path="/no-topic-available-page" element={<NoTopicAvailable />} />
        <Route path="/topicspage/:topic/quiz" element={<QuizPage />} />
        <Route path="/topicspage/:topic/facts-sheet" element={<FactsPage />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
