// TopicPages/ReactPage.js
import React, { useState } from 'react';
import './styles/Subpage.css';

const translations = {
    english: {
        content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    },
    tamil: {
        content: 'கேஸ்கேடிங் ஸ்டைல் ஷீட்டு (CSS) ஒரு மார்க்அப் நிரலில் எழுதப்பட்ட ஆவணத்தின் பார்வையையும் வடிவத்தையும் விவரிக்கும் ஒரு ஸ்டைல் ஷீட் மொழி. CSS உருவாக்கப்பட்ட ஆவணம் எப்படி திருப்தி செய்ய வேண்டும் என விவரிக்கின்றது.',
    },
    malayalam: {
        content: 'കാസ്കേഡിംഗ് സ്റ്റൈൽ ഷീറ്റുകൾ (CSS) അദ്ദേഹം മാർക്കഅപ്പ് ഭാഷയിൽ എഴുതിയ ഒരു ഡോക്യുമെന്റ്റിന്റെ രൂപത്തൊന്നും വിവരിക്കാൻ ഉപയോഗിക്കുന്ന ഒരു സ്റ്റൈൽ ഷീറ്റ് ഭാഷ ആണ്. CSS എങ്ങനെ ഉള്ളിലേക്ക്, കാക്കയിലേക്ക്, സ്പീചിലേക്ക് അല്ലെങ്കിൽ മറ്റുചാനലുകളിൽ എങ്ങനെ പ്രദർശിപ്പിക്കണമെന്ന് വിവരിക്കുന്നു.',
    },
    kannada: {
        content: 'ಕ್ಯಾಸ್ಕೇಡಿಂಗ್ ಶೈಲಿ ಶೀಟ್ಗಳು (CSS) ಒಂದು ಮಾರ್ಕಪ್ ಭಾಷೆಯಲ್ಲಿ ಬರೆಯಲ್ಪಟ್ಟ ದಾಖಲದ ಹೊರಗಿನ ರೂಪ ಮತ್ತು ಕ್ರೊಮ್ ವಿವರಣೆಗಾಗಿ ಬಳಸಲ್ಪಡುವಂತಿರುವ ಶೈಲಿ ಶೀಟ್ ಭಾಷೆಯಾಗಿದೆ. CSS ಅಂಶಗಳು ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ ಹೇಗೆ ಪ್ರದರ್ಶಿಸಬೇಕು ಅಥವಾ ಕಾಗದದಲ್ಲಿ, ಉಚ್ಚವಾಚಿಯಲ್ಲಿ, ಅಥವಾ ಇತರ ಮೀಡಿಯಾದಲ್ಲಿ ಹೇಗೆ ಇರಬೇಕು ಎನ್ನುವುದನ್ನು ವಿವರಿಸುತ್ತದೆ.',
    },
    hindi: {
        content: 'कास्केडिंग स्टाइल शीट्स (CSS) एक स्टाइल शीट भाषा है जिसका उपयोग एक मार्कअप भाषा में लिखे गए दस्तावेज़ के रूप और स्वरूप को विवरणित करने के लिए किया जाता है। CSS यह बताता है कि तत्वों को स्क्रीन पर कैसे प्रस्तुत किया जाए, कागज पर, भाषण में, या अन्य मीडिया पर।',
    },
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
        question: 'What does CSS stand for?',
        options: [
            'A. Computer Style Sheets',
            'B. Creative Style Sheets',
            'C. Cascading Style Sheets (Correct Answer)',
            'D. Colorful Style Sheets',
        ],
    },
    {
        question: 'What is the purpose of the "box-sizing" property in CSS?',
        options: [
            'A. Adjusts the width and height of elements',
            'B. Defines the color of the border',
            'C. Specifies the sizing behavior for the box model (Correct Answer)',
            'D. Sets the background color of an element',
        ],
    },
    {
        question: 'How can you center an element horizontally in CSS?',
        options: [
            'A. text-align: center;',
            'B. align: center;',
            'C. margin: auto; (Correct Answer)',
            'D. float: center;',
        ],
    },
    {
        question: 'What is the purpose of the "z-index" property in CSS?',
        options: [
            'A. Specifies the width of an element',
            'B. Sets the transparency of an element',
            'C. Defines the order of stacked elements (Correct Answer)',
            'D. Adjusts the spacing between elements',
        ],
    },
    {
        question: 'What does the CSS property "display: none;" do?',
        options: [
            'A. Hides an element (Correct Answer)',
            'B. Changes the font of an element',
            'C. Increases the line height',
            'D. Adds a border to an element',
        ],
    },
];

const newMSQs = [
    {
        question: 'What is the purpose of the "flexbox" layout in CSS?',
        options: [
            'A. Adds shadows to elements',
            'B. Creates a flexible container with aligned items (Correct Answer)',
            'C. Adjusts the spacing between letters',
            'D. Changes the background color of an element',
        ],
    },
    {
        question: 'How can you apply a gradient background to an element in CSS?',
        options: [
            'A. background-color: gradient;',
            'B. background-image: linear-gradient(); (Correct Answer)',
            'C. gradient: apply-background;',
            'D. color: gradient;',
        ],
    },
    {
        question: 'What is the purpose of the "transition" property in CSS?',
        options: [
            'A. Defines the duration of an animation',
            'B. Specifies the thickness of a border',
            'C. Adds a smooth transition effect to an element (Correct Answer)',
            'D. Sets the font style of an element',
        ],
    },
    {
        question: 'How can you select all even-numbered elements with CSS?',
        options: [
            'A. :even-selector;',
            'B. element: even;',
            'C. :nth-child(even); (Correct Answer)',
            'D. even-element-selector;',
        ],
    },
    {
        question: 'What is the purpose of the "box-shadow" property in CSS?',
        options: [
            'A. Adds a border to an element',
            'B. Defines the shadow color of an element',
            'C. Applies a shadow effect to an element (Correct Answer)',
            'D. Adjusts the width of an element',
        ],
    },
];

const CSSPage = () => {
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

    const imageUrl1 = 'https://d2mk45aasx86xg.cloudfront.net/Benefits_of_CSS_tool_f748a7dfa4.webp';
    const imageUrl2 = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220719140829/CSS-Released-year.png';
    return (
        <div className="sub-page-container">
            <h2>CSS (Cascading Style Sheets)</h2>

            <section>
                <h3>Definition</h3>
                <p>
                    CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.
                    It controls the layout, formatting, and appearance of elements on a web page.
                </p>
            </section>

            <section>
                <h3>Key Features</h3>
                <ul>
                    <li>Cascading: Styles can be inherited and overridden, allowing for a consistent yet flexible design.</li>
                    <li>Selectors: CSS uses selectors to target specific HTML elements for styling.</li>
                    <li>Box Model: Elements are treated as boxes with properties like margin, padding, width, and height.</li>
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
                <h3>CSS Video</h3>
                {/* Add your video player component or embed the video here */}
                <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="CSS Video"
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
                    <li><a href="/topicspage/JavaScript">JavaScript</a></li>
                    <li><a href="/topicspage/HTML">HTML</a></li>
                    {/* Add more links as needed */}
                </ul>
            </section>

        </div>
    );
};

export default CSSPage;
