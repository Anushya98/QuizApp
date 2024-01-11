import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import data from './data.json';
import './styles/Subpage.css';
import QuizPage from './QuizPage';
import FactsSheet from './FactsSheet';

const ProgrammingPage = ({ data }) => {
    const [language, setLanguage] = useState('english');
    const [currentTopic, setCurrentTopic] = useState(data);
    const [showQuizOptions, setShowQuizOptions] = useState(false);
    const [numQuestions, setNumQuestions] = useState(5);
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [selectedAnswers, setSelectedAnswers] = useState(Array(currentTopic.msqs.length).fill(null));
    const [showFacts, setShowFacts] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentTopic(data);
    }, [data]);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const translatedContent = currentTopic.contents[language];

    const handleDifficultyChange = (selectedDifficulty) => {
        setSelectedDifficulty(selectedDifficulty);
    };

    const handleNumQuestionsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumQuestions(isNaN(value) ? 0 : value);
    };

    const handleQuizButtonClick = () => {
        setShowQuizOptions((prev) => !prev);
    };

    const handleStartQuizClick = () => {
        // Filter questions based on difficulty level and number of questions
        const filteredQuestions = filterQuestionsByDifficulty(currentTopic.quizQuestions, selectedDifficulty, numQuestions);

        // Add a conditional check before navigating
        if (currentTopic && filteredQuestions.length > 0) {
            navigate(`${location.pathname}/quiz`, { state: { quizQuestions: filteredQuestions } });
        } else {
            console.error('No matching questions for the selected difficulty level and number.');
        }
    };

    const filterQuestionsByDifficulty = (questions, difficulty, num) => {
        const lowercaseDifficulty = difficulty.toLowerCase();

        if (lowercaseDifficulty === 'all') {
            return questions.slice(0, num);
        }

        return questions.filter((question) => question.difficulty_level === lowercaseDifficulty).slice(0, num);
    };

    const handleOptionClick = (questionIndex, selectedOption) => {
        // Check if the question has already been answered
        if (selectedAnswers[questionIndex] !== null) {
            return;
        }

        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[questionIndex] = selectedOption;

        const correctAnswer = currentTopic.msqs[questionIndex].correct_answer;
        const isCorrect = correctAnswer === selectedOption;
        const optionElements = document.querySelectorAll(`.msqs li:nth-child(${questionIndex + 1}) ol li`);
        optionElements.forEach((element) => {
            element.classList.remove('selected-option');
        });
        setSelectedAnswers(updatedSelectedAnswers);

        if (!isCorrect) {
            // Highlight the correct option if the user selected the wrong answer
            const optionElements = document.querySelectorAll(`.msqs li:nth-child(${questionIndex + 1}) ol li`);

            optionElements.forEach((element, index) => {
                const optionText = element.innerText.trim();
                if (optionText === correctAnswer) {
                    element.classList.add('correct-option');
                } else {
                    element.classList.remove('correct-option');
                }
            });
        }
    };

    const handleFactsButtonClick = () => {
        // Add a conditional check before navigating
        if (currentTopic && currentTopic.facts && currentTopic.facts.length > 0) {
          navigate(`${location.pathname}/facts-sheet`, { state: { facts: currentTopic.facts } });
        } else {
          console.error('No facts available for the current topic.');
        }
      };
      


    return (
        <div className="sub-page-container">
            <h2>{currentTopic.title}</h2>

            <div className="definitions">
                <h3>Defenition</h3>
                <p>{currentTopic.definitions}</p>
            </div>

            <div className="key-features">
                <h3>Key Features</h3>
                <ul>
                    {currentTopic.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="contents">
                <h3>Content</h3>
                <p>{translatedContent}</p>

                <div className="language-dropdown">
                    <span>Translate to: </span>
                    <select onChange={(e) => handleLanguageChange(e.target.value)} value={language}>
                        <option value="english">English</option>
                        <option value="tamil">Tamil</option>
                        <option value="malayalam">Malayalam</option>
                        <option value="kannada">kannada</option>
                        <option value="hindi">Hindi</option>
                    </select>
                </div>
            </div>

            <div className="images-section">
                <h3>Images</h3>
                {currentTopic.images.map((imageUrl, index) => (
                    <img key={index} className="sub-image" src={imageUrl} alt={`${currentTopic.title} Image ${index + 1}`} />
                ))}
            </div>

            <div>
                <h3>Video</h3>
                <iframe
                    width="300"
                    height="200"
                    src={currentTopic.videoUrl}
                    title={`${currentTopic.title} Video`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="msqs">
                <h3>MSQ's</h3>
                <ol>
                    {currentTopic.msqs.map((msq, index) => (
                        <li key={index}>
                            {msq.question}
                            <ol type="a">
                                {msq.options.map((option, optionIndex) => {
                                    const isCorrect = msq.correct_answer === option;
                                    const isSelected = selectedAnswers[index] === option;

                                    return (
                                        <li
                                            key={optionIndex}
                                            className={isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}
                                            onClick={() => handleOptionClick(index, option)}
                                        >
                                            {option}
                                        </li>
                                    );
                                })}
                            </ol>
                        </li>
                    ))}
                </ol>

                <div className="quiz-options">
                    <button onClick={handleQuizButtonClick} className="take-quiz-button">
                        {showQuizOptions ? 'Hide Quiz Options' : 'Take a Quiz'}
                    </button>

                    {showQuizOptions && (
                        <div className="quiz-filter">
                            <div className="quiz-filter-level">
                                <span>Difficulty Level: </span>
                                <select
                                    onChange={(e) => handleDifficultyChange(e.target.value)}
                                    value={selectedDifficulty}
                                    className={`difficulty-select option-${selectedDifficulty.toLowerCase()}`}
                                >
                                    <option value="all">All</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                            <div className="quiz-filter-number">
                                <span>Number of Questions: </span>
                                <input
                                    type="number"
                                    min="1"
                                    value={numQuestions}
                                    onChange={handleNumQuestionsChange}
                                />
                            </div>

                            <button onClick={handleStartQuizClick} className="start-quiz-button">
                                Start Quiz
                            </button>
                        </div>
                    )}
                </div>

            </div>

            <button onClick={handleFactsButtonClick} className="facts-button">
                Click here for facts
            </button>

            {/* {showFacts && (
                <div className="facts-section">
                    <h3>Facts</h3>
                    <ul>
                        {currentTopic.facts.map((fact) => (
                            <li key={fact.id}>
                                <strong>{fact.fact}:</strong> {fact.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}

            <div className="importance-level">
                <h3>Importance Level</h3>
                <p>{currentTopic.importanceLevel} out of 10</p>
            </div>

            <div className="relevant-topics">
                <h3>Relevant Topics</h3>
                <ul>
                    {currentTopic.relevantTopics.map((topic, index) => (
                        <li key={index}>
                            <a href={topic}>{topic}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default ProgrammingPage;
