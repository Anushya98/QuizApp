import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/QuizPage.css';
import data from './data.json';
import html2pdf from 'html2pdf.js';

const QuizPage = () => {
    const location = useLocation();
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [timer, setTimer] = useState(15);
    const [timerPaused, setTimerPaused] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [quizEnded, setQuizEnded] = useState(false);
    const [pdfDownloading, setPdfDownloading] = useState(false);



    useEffect(() => {
        // Extract quiz questions from the location state
        if (location.state && location.state.quizQuestions) {
            const questions = location.state.quizQuestions;
            setQuizQuestions(questions);
        }
    }, [location.state]);

    useEffect(() => {
        // Timer logic
        const intervalId = setInterval(() => {
            if (!timerPaused) {
                setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
            }

            // If the timer reaches 0 and no option is selected, automatically select the correct answer
            if (timer === 0 && selectedOptionIndex === null) {
                const correctAnswer = quizQuestions[currentQuestionIndex].correct_answer;
                const correctOptionIndex = quizQuestions[currentQuestionIndex].options.indexOf(correctAnswer);

                setSelectedOptionIndex(correctOptionIndex);
                setShowCorrectAnswer(true);
                setTimerPaused(true);
            }
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [timer, timerPaused, selectedOptionIndex, currentQuestionIndex, quizQuestions]);

    const handleAnswerClick = (optionIndex) => {
        // Check if an option is already selected for the current question
        if (selectedOptionIndex !== null || timerPaused) {
            return;
        }

        const correctAnswer = quizQuestions[currentQuestionIndex].correct_answer;
        const correctOptionIndex = quizQuestions[currentQuestionIndex].options.indexOf(correctAnswer);

        setSelectedOptionIndex(optionIndex);

        // Check the correctness of the selected option
        if (optionIndex === correctOptionIndex) {
            console.log('Correct Answer');
            setShowCorrectAnswer(true);
        } else {
            console.log('Incorrect Answer');
        }

        // Save user's answer
        setUserAnswers((prevAnswers) => [
            ...prevAnswers,
            { question: quizQuestions[currentQuestionIndex].question, userAnswer: optionIndex }
        ]);

        // Pause the timer
        setTimerPaused(true);
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            // Move to the next question
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setTimer(15);
            setSelectedOptionIndex(null);
            setShowCorrectAnswer(false);
            setTimerPaused(false); // Resume the timer
        } else {
            // End of quiz logic
            setQuizEnded(true);
        }
    };

    const renderAnswerSheet = () => {
        return (
            <div className="answer-sheet">
                <h2>Answers</h2>
                {quizQuestions.map((question, index) => (
                    <div key={index} className="answer-item">
                        <div className="question-column">
                            <p className='question_number'>
                                <strong>{`${index + 1}.`}</strong>
                            </p>
                        </div>
                        <div className="answer-column">
                            <p className={`youranswer ${timer === 0 && selectedOptionIndex === null ? 'correct' : (userAnswers[index]?.userAnswer === quizQuestions[index]?.options.indexOf(quizQuestions[index]?.correct_answer) ? 'correct' : 'incorrect')}`}>
                                {`Your Answer: ${timer === 0 && selectedOptionIndex === null ? '""' : quizQuestions[index]?.options[userAnswers[index]?.userAnswer] || 'Not Answered'}`}
                            </p>
                            <p className='correctanswer'>{`Correct Answer: ${quizQuestions[index].correct_answer}`}</p>
                            <p className='explanation'>{quizQuestions[index]?.explanation}</p>
                        </div>
                    </div>
                ))}
                <div className="pdf-download-button-container">
                    <button
                        onClick={downloadPdf}
                        disabled={pdfDownloading}
                        className="pdf-download-button"
                    >
                        {pdfDownloading ? 'Downloading PDF...' : 'Save As PDF'}
                    </button>
                </div>
            </div>
        );
    };

    const downloadPdf = () => {
        setPdfDownloading(true);

        const options = {
            margin: 10,
            filename: 'answer_sheet.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        const answerSheetContainer = document.querySelector('.answer-sheet');
        html2pdf(answerSheetContainer, options).then(() => {
            setPdfDownloading(false);
        });
    };



    if (quizEnded) {
        return renderAnswerSheet();
    }

    if (!quizQuestions || quizQuestions.length === 0) {
        return <div>Loading quiz questions...</div>;
    }

    if (currentQuestionIndex >= quizQuestions.length) {
        return <div>No more questions</div>;
    }

    return (
        <div className="quiz-page">
            <h2>Quiz</h2>
            <div className="question-container">
                <p className="question-number">{`${currentQuestionIndex + 1} of ${quizQuestions.length}`}</p>
                <div className="question-details">
                    {quizQuestions[currentQuestionIndex].question_photo && (
                        <img src={quizQuestions[currentQuestionIndex].question_photo} alt="Question" className="question-photo" />
                    )}
                    <p>{quizQuestions[currentQuestionIndex].question}</p>
                </div>
                <div className="timer-container">
                    <p className={`timer ${timer === 0 ? 'time-up' : ''}`}>{timer}</p>
                    {timer === 0 && (
                        <div className="correct-answer-indicator" style={{ borderColor: '#00ff00' }} />
                    )}
                    <div className="progress-bar" style={{ background: `conic-gradient(#00ff00 ${(15 - timer) * 18}deg, #ff0000 ${(15 - timer) * 18}deg 360deg)` }} />
                </div>
            </div>
            <div className="options">
                {quizQuestions[currentQuestionIndex].options.map((option, optionIndex) => (
                    <div
                        key={optionIndex}
                        className={`option ${optionIndex === selectedOptionIndex
                            ? optionIndex === quizQuestions[currentQuestionIndex].options.indexOf(quizQuestions[currentQuestionIndex].correct_answer)
                                ? 'correct'
                                : 'incorrect'
                            : ''
                            }`}
                        onClick={() => handleAnswerClick(optionIndex)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div className="additional-info">
                <p>{`Difficulty Level: ${quizQuestions[currentQuestionIndex].difficulty_level}`}</p>
                <p>{`Remarks: ${quizQuestions[currentQuestionIndex].remarks}`}</p>
            </div>
            {selectedOptionIndex !== null && (
                <button onClick={handleNextClick} className="next-button">
                    Next
                </button>
            )}
        </div>
    );
};

export default QuizPage;
