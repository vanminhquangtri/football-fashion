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
                                        <h5 className="title">Sản phẩm mới nhất</h5>
                                        <NavLink
                                            to="/best-sales"
                                            className="link"
                                        >
                                            Truy cập ngay
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-item item-2">
                                    <div className="background-image"></div>
                                    <div className="slide-caption">
                                        <h5 className="title">Bạn là nhà vô địch</h5>
                                        <NavLink
                                            to="/champion"
                                            className="link"
                                        >
                                            Truy cập ngay
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-item item-3">
                                    <div className="background-image"></div>
                                    <div className="slide-caption">
                                        <h5 className="title">Top 5 giải đấu hấp dẫn nhất</h5>
                                        <NavLink
                                            to="/all-fashion"
                                            className="link"
                                        >
                                            Truy cập ngay
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