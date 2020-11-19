import React from 'react';
import "../../../Assets/images/section-goals-video/Internet+Entertainment.png";

const GoalVideo = () => {
    return (
        <section className="goals-video">
            <div className="container-fluid">
                <div className="row title">
                <div className="col">
                    <div className="wrap">
                    <img src={require("../../../Assets/images/section-goals-video/Internet+Entertainment.png").default} alt="" />
                    <span>QUẨY CÙNG BÓNG ĐÁ</span>
                    <img src={require("../../../Assets/images/section-goals-video/136-1369563_dance-clipart-png.png").default} alt="" />
                    </div>
                </div>
                </div>
                <div className="row video">
                    <div className="col">
                        <div className="wrap">
                        <video controls autoPlay muted>
                            <source src={require("../../../Assets/video/section-goals-video/BEST Premier League Goals.mp4").default} type="video/mp4" />
                        </video>
                        <p className="des">Top bàn thắng đẹp nhất Premier League mùa giải 2019 / 2020</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrap">
                        <video controls autoPlay muted>
                            <source src={require("../../../Assets/video/section-goals-video/TOP 10 GOALS LaLiga.mp4").default} type="video/mp4" />
                        </video>
                        <p className="des">10 bàn thắng đẹp nhất La Liga mùa giải 2019 / 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoalVideo;