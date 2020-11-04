// direct child of Homepage
import React from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react"
const settings = {
    items: 1,
    nav: false
}

const TopSlide = () => {
    return (
        <section className="top-slide">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="wrap">
                            <TinySlider settings={settings}>
                                <div className="slide-item item-1">
                                    <div className="background-image"></div>
                                    <div className="slide-caption">
                                        <h5 className="title">Always update the latest</h5>
                                        <NavLink
                                            to="/best-sales"
                                        >
                                            Discover Now
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-item item-1">
                                    <div className="background-image"></div>
                                    <div className="slide-caption">
                                        <h5 className="title">Always update the latest</h5>
                                        <NavLink
                                            to="/best-sales"
                                        >
                                            Discover Now
                                        </NavLink>
                                    </div>
                                </div>
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSlide;