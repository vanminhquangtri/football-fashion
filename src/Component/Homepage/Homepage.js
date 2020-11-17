import React,{useEffect} from 'react';
import {NavLink} from "react-router-dom";
import TopViewed from './TopViewed/TopViewed';
import TopSlide from './TopSlide/TopSlide';
import SpecialPromotion from './SpecialPromotion/SpecialPromotion';
import TopSales from './TopSales/TopSales';
import Champion from './Champion/Champion';
import GoalVideo from './GoalVideo/GoalVideo';
import NewsImage from "../../Assets/images/section-home-page/news3.gif";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <section className="homepage">
            <div className="top-news">
                <div className="content">
                    <div className="news">
                        <NavLink to="/promotion" className="link">
                            Khuyến mãi siêu hấp dẫn
                            <img className="news-image" alt="promotion" src={NewsImage}/>
                        </NavLink>
                        <NavLink to="/leagues" className="link">
                            Khám phá những bộ cánh siêu đẳng cấp
                            <img className="news-image" alt="promotion" src={NewsImage}/>
                        </NavLink>
                    </div>
                </div>
            </div>
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