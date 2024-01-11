// TopicsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgrammingPage from './Programmingpage';
import data from './data.json';

const TopicsPage = () => {
    const { topic } = useParams();
    const [topicData, setTopicData] = useState(null);

    useEffect(() => {
        if (data[topic]) {
            setTopicData(data[topic]);
        } else {
            // Handle the case when the topic is not found
            setTopicData(null);
        }
    }, [topic]);

    if (!topicData) {
        return <div>Error: Topic not found</div>;
    }

    return <ProgrammingPage data={topicData} />;
};

export default TopicsPage;
