// TopicPages/ReactPage.js
import React, { useState } from 'react';
import './styles/Subpage.css';

const translations = {
    english: {
        content: 'HTML is the backbone of web development, providing the essential structure that browsers use to render and display content. It consists of a series of elements, each represented by tags, which define the structure and content of a web page. HTML is crucial for creating accessible and well-organized web content.',
    },
    tamil: {
        content: 'HTML வலை உருவாக்கத்தின் கழுகுத்தாகும், உலாவிகள் பயன்படுத்தும் அனைத்து உள்ளடக்கங்களை காட்டுவதுக்கு அவசியமான கட்டமைப்பைத் தருகின்றது. அந்தக் கட்டமைப்பு ஒரு தொகுப்பு எண்ணைக் கொண்டுள்ளது, ஒவ்வொருவரையும் அதன் செயல்திறன் மற்றும் உள்ளடக்கத்தை வரைவிக்கின்ற குறியீடுகள் வழி அமைக்கப்படுகின்றன, இது ஒரு வலை பக்கத்தின் கட்டமை மற்றும் உள்ளடக்கத்தை வரைவிக்கும்.',
    },
    malayalam: {
        content: 'HTML വെബ് ഡെവലപ്മെന്റിന്റെ പിന്തുണയാണ്, ബ്രൌസറുകൾ കണ്ടെത്താനും ഉള്ളടക്കമുള്ള അടങ്ങലുകൾ പ്രദാനം ചെയ്യുന്നത്. ഇതിനായി ഒരു സീരീസ് ഓഫ് എലിമെന്റുകൾ ഉണ്ടായിരിക്കുന്നു, ഓരോ എലിമെന്റ് ടാഗുകളായി പ്രതിനിധീകരിക്കപ്പെടുന്നു, അവ ഒരു വെബ് പേജിന്റെ ഘടനയും ഉള്ളടക്കം വ്യാപകമാക്കുന്നു. HTML എഴുതുന്നതിനായി വലിയ പ്രാവശ്യ സുഗമമായ പരിചയം അവശ്യമാണ്.',
    },
    kannada: {
        content: 'HTML ವೆಬ್ ಡೆವೆಲಪ್ಮೆಂಟ್ ನ ರೆಕಾರ್ಡ್ ಎಂದರೆ, ಬ್ರೌಸರ್ಗಳು ಕಂಡುಹಿಡಿಯಲು ಮತ್ತು ವಿಷಯವನ್ನು ಪ್ರದರ್ಶಿಸಲು ಬಳಕೆಯಾಗುವ ಅತ್ಯಂತ ಅಗತ್ಯವಾದ ರೂಪವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಒಂದು ವರ್ಗದ ಎಲೆಮೆಂಟ್‌ಗಳ ಕ್ರಮವಾದ ದರ್ಶಕದಲ್ಲಿ ಇರುವ ಅವುಗಳ ರೂಪಾಂತರಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ, ಅವು ಒಟ್ಟಿನ ಘಟನೆಯನ್ನು ಮತ್ತು ವಿಷಯವನ್ನು ವಿವರಿಸುತ್ತವೆ. HTML ಯು ಪ್ರವೇಶಿಸಲು ಅಥವಾ ಚೆನ್ನಾಗಿ ಸಂಗ್ರಹಿಸಲು ಪ್ರಮುಖವಾಗಿದೆ.',
    },
    hindi: {
        content: 'वेब डेवेलपमेंट का मुख्य स्तंभ HTML है, जो ब्राउज़र्स को सामग्री को रेंडर और प्रदर्शित करने के लिए आवश्यक संरचना प्रदान करता है। इसमें कई तत्व होते हैं, जो टैग्स द्वारा प्रतिष्ठित होते हैं, जो एक वेब पृष्ठ की संरचना और सामग्री को परिभाषित करते हैं। HTML एक पहुँचने और अच्छी तरह से संगठित वेब सामग्री बनाने के लिए महत्वपूर्ण है।',
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
        question: 'What does HTML stand for?',
        options: [
            'A. Hyper Text Markup Language',
            'B. High-level Text Management Language',
            'C. Hyperlink and Text Markup Language (Correct Answer)',
            'D. Home Tool Markup Language',
        ],
    },
    {
        question: 'Which HTML tag is used for creating an ordered list?',
        options: [
            'A. <ul>',
            'B. <li>',
            'C. <ol> (Correct Answer)',
            'D. <dl>',
        ],
    },
    {
        question: 'What does the "alt" attribute in the <img> tag provide?',
        options: [
            'A. Alternative text for an image (Correct Answer)',
            'B. Alignment for the image',
            'C. Animated loop time',
            'D. Altitude of the image',
        ],
    },
    {
        question: 'Which HTML element is used for creating hyperlinks?',
        options: [
            'A. <link>',
            'B. <href>',
            'C. <a> (Correct Answer)',
            'D. <hyperlink>',
        ],
    },
    {
        question: 'In HTML, which tag is used for creating a table?',
        options: [
            'A. <tab>',
            'B. <table> (Correct Answer)',
            'C. <tr>',
            'D. <td>',
        ],
    },
];

const newMSQs = [
    {
        question: 'What is the purpose of the HTML <head> element?',
        options: [
            'A. To define the main content of the HTML document',
            'B. To specify the document type and version',
            'C. To contain metadata about the HTML document (Correct Answer)',
            'D. To create a header section for the webpage',
        ],
    },
    {
        question: 'Which HTML tag is used for creating a hyperlink to another website?',
        options: [
            'A. <link>',
            'B. <a> (Correct Answer)',
            'C. <href>',
            'D. <hyperlink>',
        ],
    },
    {
        question: 'What does the HTML <em> element represent?',
        options: [
            'A. An embedded video',
            'B. Emphasis or italic text (Correct Answer)',
            'C. An email address',
            'D. An image',
        ],
    },
    {
        question: 'Which attribute is used in the <form> element to specify the URL where the form data should be sent?',
        options: [
            'A. action (Correct Answer)',
            'B. target',
            'C. method',
            'D. submit',
        ],
    },
    {
        question: 'What is the purpose of the HTML <footer> element?',
        options: [
            'A. To create a webpage footer',
            'B. To define a section that contains navigation links',
            'C. To represent metadata about the document',
            'D. To define a footer for a section or page (Correct Answer)',
        ],
    },
];

const HTMLPage = () => {
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

    const imageUrl1 = 'https://www.techgeekbuzz.com/media/uploads/vijay/2023/06/08/10-html-real-world-applications-2.jpg';
    const imageUrl2 = 'https://blog-media.byjusfutureschool.com/bfs-blog/2021/09/17203233/What-is-HTML-Article-Page-948_500.png';
    return (
        <div className="sub-page-container">
            <h2>HTML (Hypertext Markup Language)</h2>

            <section>
                <h3>Definition</h3>
                <p>
                    HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of a web page using markup elements, defining elements such as headings, paragraphs, links, images, and more.
                </p>
            </section>

            <section>
                <h3>Key Features</h3>
                <ul>
                    <li>'Simple and easy to learn.',</li>
                    <li>'Supports multimedia elements like images and videos.',</li>
                    <li>'Defines the structure of a web page.',</li>
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
                <h3>HTML Video</h3>
                {/* Add your video player component or embed the video here */}
                <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="HTML Video"
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
                    <li><a href="/topicspage/CSS">CSS</a></li>
                    {/* Add more links as needed */}
                </ul>
            </section>

        </div>
    );
};

export default HTMLPage;
