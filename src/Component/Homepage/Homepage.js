import React from 'react';
import TopViewed from './TopViewed/TopViewed';
import TopSlide from './TopSlide/TopSlide';

const Homepage = () => {
    return (
        <>
            <TopSlide></TopSlide>
            <TopViewed/>
        </>
    );
};

export default Homepage;