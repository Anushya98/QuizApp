// TopicPages/ReactPage.js
import React, { useState } from 'react';
import './styles/Subpage.css';
import data from './data.json';

const translations = {
    english: {
        content: 'React provides a rich set of tools for building interactive user interfaces. Developers can create components that encapsulate the behavior and appearance of parts of the UI, making it easier to manage and maintain large applications.',
    },
    tamil: {
        content: 'ரியாக்ட் இயக்கத்திற்கு கருவிகள் உருவாக்க வழி மக்களுக்கு விரும்பத்தக்க உருவாக்கங்களை வழங்குகின்றது. பரிசோதனையை செய்யும்போது, பயனர்கள் யூஐஐயின் பாகங்களின் நடவடிக்கை மற்றும் பராமரிப்புகளை அடிப்படையாக உள்ளடக்கலாம்.',
    },
    malayalam: {
        content: 'റീയാക്ട്, ഇന്റരാക്ടീവ് ഉപയോക്താവ്യാപാര സഞ്ചയത്തിനായി ശരിക്കും ഉപയോക്താവിനെ അനുകരണപ്രദമായ യൂആയ്‌ഐ ഘടനയുള്ള ഉപയോക്താവ്യാപാര സഞ്ചയങ്ങൾ നിർമ്മിക്കാൻ ശക്തമായ ഉപകരണങ്ങൾ നൽകുന്നു. ഡെവലപ്പേഴ്സുകൾ UI-യുടെ ഭാഗങ്ങളുടെ പ്രവർത്തനവും രൂപവും എല്ലാം എളുപ്പത്തിൽ നിര്‍വഹിക്കുകയും വലിയ അപ്ലിക്കേഷനുകളെ നിര്‍വഹിക്കുകയും ചെയ്യുന്നു.',
    },
    kannada: {
        content: 'ರಿಯಾಕ್ಟ್, ಇಂಟರ್ಯಾಕ್ಟಿವ್ ಬಳಸಿಕೊಳ್ಳಲು ಹಿಡಿತವಾದ ಉಪಯೋಕ್ತಾವಾದ ಒಂದು ಜಾವಾಸ್ಕ್ರಿಪ್ಟ್ ಲೈಬ್ರರಿ. ಡೆವೆಲಪರ್ಸ್ ಯೂಆಐ ಘಟನೆ ಮತ್ತು ರೂಪದ ಭಾಗಗಳ ವರ್ತನೆಯನ್ನು ಎನ್ಕೆಪಸುಲೇಟ್ ಮಾಡಲು ಹೊಂದಿದೆ.',
    },
    hindi: {
        content: 'रियैक्ट उपयोगकर्ता इंटरफ़ेस या यूआई संघटन के लिए एक जावास्क्रिप्ट लाइब्रेरी है। डेवेलपर्स किसी भी यूआई के भाग के व्यवहार और उपस्थिति को समाहित करने वाले कंपोनेंट बना सकते हैं, जिससे बड़े अनुप्रयोगों को प्रबंधित और बनाए रखना आसान हो जाता है।',
    },

    // Add translations for other languages as needed
};

const languageOptions = [
    { label: 'English', value: 'english' },
    { label: 'Tamil', value: 'tamil' },
    { label: 'Malayalam', value: 'malayalam' },
    { label: 'Kannada', value: 'kannada' },
    { label: 'Hindi', value: 'hindi' },
    // Add more languages as needed
];

const { react: reactQuestions, javascript: javascriptQuestions } = data;

const ReactPage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('english');
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('react'); // Default to 'react'

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setShowLanguageOptions(false);
    };

    const toggleLanguageOptions = () => {
        setShowLanguageOptions(!showLanguageOptions);
    };

    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
    };

    const { content } = translations[currentLanguage];
    const { questions } = data[selectedTopic];

    const imageUrl1 = 'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png';
    const imageUrl2 = 'https://i.ytimg.com/vi/LlvBzyy-558/maxresdefault.jpg';
    return (
        <div className="sub-page-container">
            <h2>React</h2>

            <section>
                <h3>Definition</h3>
                <p>
                    React is a JavaScript library for building user interfaces or UI components.
                    It allows developers to create reusable UI components and manage the state
                    of an application efficiently.
                </p>
            </section>

            <section>
                <h3>Key Features</h3>
                <ul>
                    <li>Declarative: React makes it easy to reason about the application state and how the UI should look.</li>
                    <li>Component-Based: UIs are broken down into components, making them reusable and maintainable.</li>
                    <li>Virtual DOM: React uses a virtual DOM to improve rendering performance.</li>
                </ul>
            </section>

            <section>
                <h3>Content</h3>
                <p>{content}</p>
                <div className="translate-container">
                    <button onClick={toggleLanguageOptions}>
                        Translate ({languageOptions.find(option => option.value === currentLanguage).label})
                    </button>
                    {showLanguageOptions && (
                        <ul className="language-options">
                            {languageOptions.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleLanguageChange(option.value)}
                                    className={currentLanguage === option.value ? 'selected' : ''}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
            <section className="images-section">
                <h3>Images</h3>
                {/* Add your images here */}
                <img className="sub-image" src={imageUrl1} alt="Description 1" />
                <img className="sub-image" src={imageUrl2} alt="Description 2" />
                {/* Add more images as needed */}
            </section>
            <div>
                <h3>React Video</h3>
                {/* Add your video player component or embed the video here */}
                <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="React Video"
                    frameborder="0"
                    allowFullScreen
                ></iframe>
            </div>
            {/* Example MCQs (Quiz) */}
            <div>
                <h3>MSQ's</h3>
                <ol>
                    <li>What is React?</li>
                    <ol type="a">
                        <li>A programming language</li>
                        <li>A database management system</li>
                        <li><b>A JavaScript library for building user interfaces or UI components (Correct Answer)</b></li>
                        <li>A styling framework</li>
                    </ol>
                    <li>Which of the following is true about React components?</li>
                    <ol type="a">
                        <li> Components are not reusable</li>
                        <li><b>Components are independent and reusable building blocks (Correct Answer)</b></li>
                        <li>Components are only used for styling</li>
                        <li>Components can only have HTML code</li>
                    </ol>

                    <li>What is JSX in React?</li>
                    <ol type="a">
                        <li><b>A syntax extension for JavaScript recommended by React(Correct Answer)</b></li>
                        <li>A special file format used in React projects</li>
                        <li>A data fetching library in React</li>
                        <li>JavaScript XML</li>
                    </ol>

                    <li>What is the purpose of React Router in a React application?</li>
                    <ol type="a">
                        <li>To manage state in React components</li>
                        <li><b>To handle routing and navigation in a single-page application(Correct Answer)</b></li>
                        <li>To create animations in React</li>
                        <li>To connect React with a database</li>
                    </ol>

                    <li>What is the significance of the setState method in React?</li>
                    <ol type="a">
                        <li> It sets the initial state of a component</li>
                        <li><b>TIt updates the state of a component and triggers a re-render(Correct Answer)</b></li>
                        <li>It is used for conditional rendering</li>
                        <li>It is used to define the structure of a component</li>
                    </ol>

                </ol>
            </div>

            <section>
                <h3>Importance Level</h3>
                <p>8 out of 10</p> {/* Set the importance level as needed */}
            </section>

            <section>
                <h3>Relevant Topics</h3>
                {/* Add links to relevant topics */}
                <ul>
                    <li><a href="/topicspage/JavaScript">JavaScript</a></li>
                    <li><a href="/topicspage/CSS">CSS</a></li>
                    {/* Add more links as needed */}
                </ul>
            </section>
            <div>
                <h3>MSQ's</h3>
                <ol>
                    {reactQuestions.map((question, index) => (
                        <li key={index}>
                            {question.question}
                            <ol type="a">
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        {option}
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    );
};

export default ReactPage;
