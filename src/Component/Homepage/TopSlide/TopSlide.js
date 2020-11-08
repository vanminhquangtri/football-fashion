// direct child of Homepage
import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
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
                                    <div className="carousel-item active mc" data-interval="4000">
                                        <img src={require("../../../Assets/images/section-top-slide/mc.jpg").default} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption">
                                            <span className="title">Sản phẩm mới nhất</span>
                                            <NavLink to="/top-sales" className="link">Truy cập ngay</NavLink>
                                        </div>
                                    </div>
                                    <div className="carousel-item ars" data-interval="4000">
                                        <img src={require("../../../Assets/images/section-top-slide/ars.jpg").default} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption">
                                            <span className="title">Kênh phân phối chính thức</span>
                                            <NavLink to="/top-viewed" className="link">Truy cập ngay</NavLink>
                                        </div>
                                    </div>
                                    <div className="carousel-item tot" data-interval="4000">
                                        <img src={require("../../../Assets/images/section-top-slide/tot.jpg").default} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption">
                                            <span className="title">Top 5 giải đấu hàng đầu</span>
                                            <NavLink to="/champion" className="link">Truy cập ngay</NavLink>
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