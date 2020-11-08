import React from 'react';
import TopViewed from './TopViewed/TopViewed';
import TopSlide from './TopSlide/TopSlide';
import SpecialPromotion from './SpecialPromotion/SpecialPromotion';
import TopSales from './TopSales/TopSales';
import Champion from './Champion/Champion';
import GoalVideo from './GoalVideo/GoalVideo';

const Homepage = () => {
    return (
        <section className="homepage">
            <TopSlide/>
            <TopViewed/>
            <SpecialPromotion/>
            <TopSales/>
            <Champion/>
            <GoalVideo/>
        </section>
    );
};

export default Homepage;