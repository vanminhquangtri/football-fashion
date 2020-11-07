import React from 'react';
import TopViewed from './TopViewed/TopViewed';
import TopSlide from './TopSlide/TopSlide';
import SpecialPromotion from './SpecialPromotion/SpecialPromotion';

const Homepage = () => {
    return (
        <section className="homepage">
            <TopSlide/>
            <TopViewed target="top_viewed" operator="===" condition={true}/>
            <SpecialPromotion/>
        </section>
    );
};

export default Homepage;