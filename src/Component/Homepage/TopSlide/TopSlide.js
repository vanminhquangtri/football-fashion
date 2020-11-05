// direct child of Homepage
import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react"
const settings = {
    items: 1,
    nav: false,
    autoplay: true
}
const TopSlide = () => {
    useEffect(() => {
        // remove the default data action button of Tiny Slider React
        const dataActionBtn = document.querySelector(".tns-outer button[data-action]");
        if (dataActionBtn) {
            dataActionBtn.remove()
        }
    })
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
                                            className="link"
                                        >
                                            Discover Now
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-item item-2">
                                    <div className="background-image"></div>
                                    <div className="slide-caption">
                                        <h5 className="title">Bring you the champion's fashion</h5>
                                        <NavLink
                                            to="/champion"
                                            className="link"
                                        >
                                            Discover Now
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-item item-3">
                                    <div className="background-image"></div>
                                    <div className="slide-caption">
                                        <h5 className="title">Top-five leagues in the world</h5>
                                        <NavLink
                                            to="/all-fashion"
                                            className="link"
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