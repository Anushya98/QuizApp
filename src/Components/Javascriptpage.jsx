// TopicPages/ReactPage.js
import React, { useState } from 'react';
import './styles/Subpage.css';

const translations = {
    english: {
        content: 'JavaScript allows developers to enhance user interfaces, handle asynchronous operations, and create interactive features on websites.',
    },
    tamil: {
        content: 'ஜாவாஸ்கிரிப்ட் படங்களில் பயனர் இடைமுகத்தை மேம்படுத்த, இடைநிறுவேல் செயல்களை நிர்வகிக்க, மற்றும் வலுக்குதல் நிரல்களை உருவாக்க அனுமதிக்கின்றது.',
    },
    malayalam: {
        content: 'ജാവാസ്ക്രിപ്റ്റ് പ്രോഗ്രാമിങ്ങ് ഭാഷ ഉപയോക്താക്കളെ ഉപയോക്താ ഇടപാടുകൾ പെരുക്കാൻ, അസിൻക്രണസ് പ്രവർത്തനങ്ങൾ കൈകാര്യം ചെയ്യാൻ, ഒരുപാട് സംവാദമർഹമായ സൌകര്യങ്ങൾ സൃഷ്ടിക്കാൻ അനുവാദമാകുന്നു.',
    },
    kannada: {
        content: 'ಜಾವಾಸ್ಕ್ರಿಪ್ಟ್ ಅನ್ನು ಬಳಸುವುದರಿಂದ ಅಭಿವೃದ್ಧಿಪಡಿಸಿದಾಗ, ಬೇರೆಡೆಗಳಲ್ಲಿ ಕೈಕಾರ್ಯವನ್ನು ನಿರ್ವಹಿಸಲು, ಅಸಿಂಕ್ರೋನಸ್ ಪ್ರವೃತ್ತಿಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಮತ್ತು ವೆಬ್‌ಸೈಟ್‌ಗಳ ಮೇಲೆ ಪರಸ್ಪರ ಚಲನವನ್ನು ಸೃಷ್ಟಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.',
    },
    hindi: {
        content: 'जावास्क्रिप्ट डेवेलपर्स को यूजर इंटरफ़ेस को बेहतर बनाने, असिंक्रोनस प्रक्रियाओं को संभालने, और वेबसाइट्स पर इंटरएक्टिव फ़ीचर्स बनाने की संभावना प्रदान करता है।',
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

const previousYearMSQs = [
    {
        question: 'What is the purpose of JavaScript?',
        options: [
            'A. Styling web pages',
            'B. Creating interactive web pages (Correct Answer)',
            'C. Managing databases',
            'D. Server-side scripting',
        ],
    },
    {
        question: 'How can you include an external JavaScript file in an HTML document?',
        options: [
            'A. Using the <script> tag with the src attribute (Correct Answer)',
            'B. Using the <link> tag',
            'C. Using the <js> tag',
            'D. Using the <include> tag',
        ],
    },
    {
        question: 'What is a variable in JavaScript used for?',
        options: [
            'A. Storing values (Correct Answer)',
            'B. Creating functions',
            'C. Applying styles to HTML elements',
            'D. Defining HTML structure',
        ],
    },
    {
        question: 'How do you declare a function in JavaScript?',
        options: [
            'A. function = myFunction()',
            'B. declare function myFunction()',
            'C. function myFunction() (Correct Answer)',
            'D. declare myFunction()',
        ],
    },
    {
        question: 'What does the term "DOM" stand for in JavaScript?',
        options: [
            'A. Data Object Model',
            'B. Document Object Model (Correct Answer)',
            'C. Design Object Model',
            'D. Dynamic Object Model',
        ],
    },
];

const newMSQs = [
    {
        question: 'What is the purpose of the "let" keyword in JavaScript?',
        options: [
            'A. Declaring a constant variable',
            'B. Declaring a block-scoped variable (Correct Answer)',
            'C. Declaring a global variable',
            'D. Declaring a function',
        ],
    },
    {
        question: 'What is the role of the "async" keyword in JavaScript?',
        options: [
            'A. Declaring an asynchronous function (Correct Answer)',
            'B. Declaring a synchronous function',
            'C. Controlling the flow of a loop',
            'D. Creating an object',
        ],
    },
    {
        question: 'How can you handle errors in JavaScript?',
        options: [
            'A. Using the try/catch statement (Correct Answer)',
            'B. Using the if/else statement',
            'C. Using the switch statement',
            'D. Using the for loop',
        ],
    },
    {
        question: 'What is the purpose of the "map" function in JavaScript?',
        options: [
            'A. Creating a new array with the results of calling a provided function on every element in the array (Correct Answer)',
            'B. Iterating over an object\'s properties',
            'C. Filtering elements in an array',
            'D. Sorting an array',
        ],
    },
    {
        question: 'How do you comment in JavaScript?',
        options: [
            'A. <!-- This is a comment -->',
            'B. /* This is a comment */ (Correct Answer)',
            'C. // This is a comment',
            'D. ** This is a comment **',
        ],
    },
];

const JavascriptPage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('english');
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setShowLanguageOptions(false);
    };

    const toggleLanguageOptions = () => {
        setShowLanguageOptions(!showLanguageOptions);
    };

    const { content } = translations[currentLanguage];

    const imageUrl1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt_g-7y9BnALvcj6SpY0AqMz6OWKhwDco0g&usqp=CAU';
    const imageUrl2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfjRTY6j77jLboYQDcQrkAalN7JutqbXclQ&usqp=CAU';
    return (
        <div className="sub-page-container">
            <h2>JavaScript</h2>

            <section>
                <h3>Definition</h3>
                <p>
                    JavaScript is a programming language that enables interactive web pages. It is an essential technology for front-end development and provides dynamic behavior to websites.
                </p>
            </section>

            <section>
                <h3>Key Features</h3>
                <ul>
                    <li>Versatile and lightweight language.</li>
                    <li>Supports event-driven programming.</li>
                    <li>Used for both client-side and server-side development.</li>
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
                <h3>JavaScript Video</h3>
                {/* Add your video player component or embed the video here */}
                <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="Javascript Video"
                    frameborder="0"
                    allowFullScreen
                ></iframe>
            </div>
            {/* Example MCQs (Quiz) */}
            <section>
                <h3>Previous Year MSQs</h3>
                <ol>
                    {previousYearMSQs.map((msq, index) => (
                        <li key={index}>
                            <p>{msq.question}</p>
                            <ol type="a">
                                {msq.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>{option}</li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
            </section>

            <section>
                <h3>New MSQs</h3>
                <ol>
                    {newMSQs.map((msq, index) => (
                        <li key={index}>
                            <p>{msq.question}</p>
                            <ol type="a">
                                {msq.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>{option}</li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
            </section>


            <section>
                <h3>Importance Level</h3>
                <p>8 out of 10</p> {/* Set the importance level as needed */}
            </section>

            <section>
                <h3>Relevant Topics</h3>
                {/* Add links to relevant topics */}
                <ul>
                    <li><a href="/topicspage/React">React</a></li>
                    <li><a href="/topicspage/CSS">CSS</a></li>
                    <li><a href="/topicspage/HTML">HTML</a></li>
                    {/* Add more links as needed */}
                </ul>
            </section>

        </div>
    );
};

export default JavascriptPage;
