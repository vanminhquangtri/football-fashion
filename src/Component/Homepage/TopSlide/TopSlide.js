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
                            <div id="top-slide" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="10000000">
                                        <img src={require("../../../Assets/images/section-top-slide/tot.jpg").default} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Sản phẩm mới nhất</h5>
                                            <a href="/">Truy cập ngay</a>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="10000000">
                                        <img src={require("../../../Assets/images/section-top-slide/ars.jpg").default} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Kênh phân phối chính thức</h5>
                                            <a href="/">Truy cập ngay</a>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="10000000">
                                        <img src={require("../../../Assets/images/section-top-slide/mc.jpg").default} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Top 5 giải đấu hàng đầu</h5>
                                            <a href="/">Truy cập ngay</a>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#top-slide" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#top-slide" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSlide;