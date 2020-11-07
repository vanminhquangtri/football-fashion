import React from 'react';
import TopViewed from './TopViewed/TopViewed';
import TopSlide from './TopSlide/TopSlide';
import SpecialPromotion from './SpecialPromotion/SpecialPromotion';
import TopSales from './TopSales/TopSales';

const Homepage = () => {
    return (
        <section className="homepage">
            <TopSlide/>
            <TopViewed/>
            <SpecialPromotion/>
            <TopSales/>
        </section>
    );
};

export default Homepage;