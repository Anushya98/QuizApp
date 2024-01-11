// Topic.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Topic.css';
import TopicsPage from './Topicspage';

const availableTopics = ['React', 'JavaScript', 'CSS', 'HTML'];

const Topic = () => {
    const [enteredTopic, setEnteredTopic] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        setSearchClicked(true);
        if (availableTopics.includes(enteredTopic)) {
            // Pass enteredTopic to TopicsPage
            navigate(`/topicspage/${enteredTopic}`);
        } else {
            navigate('/no-topic-available-page');
        }
    };

    return (
        <div className="container">
            <div className="searchBox">
                <label htmlFor="topic" className="label">
                    Enter the topic:
                </label>
                <div className="inputContainer">
                    <input
                        type="text"
                        id="topic"
                        name="topic"
                        className="input"
                        placeholder="Search here..."
                        value={enteredTopic}
                        onChange={(e) => setEnteredTopic(e.target.value)}
                    />
                    <button className="button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            {/* {searchClicked && <TopicsPage selectedTopic={enteredTopic} />} */}
        </div>
    );
};

export default Topic;
