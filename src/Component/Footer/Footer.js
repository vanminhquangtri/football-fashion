import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
    return (
        <section className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col about-us">
                        <div className="title">Giới Thiệu</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda blanditiis tempora alias maiores temporibus placeat consectetur architecto natus cum sequi iusto.</p>
                        <NavLink to="/about" exact={true}>See More</NavLink>
                    </div>
                    <div className="col service">
                        <div className="title">Dịch Vụ</div>
                        <NavLink to="/promotion" exact={true}>Khuyễn mãi hấp dẫn</NavLink>
                        <NavLink to="/champion" exact={true}>Áo đấu nhà vô địch</NavLink>
                        <NavLink to="/concerned" exact={true}>Sản phẩm hot</NavLink>
                    </div>
                    <div className="col contact">
                        <div className="title">Liên Hệ</div>
                        <div className="contact-field">
                            <FontAwesomeIcon icon={faMapMarkedAlt} className="icon"/>
                            <span>Số 100, đường Lê Duẩn, Quận 1, TP. HCM</span>
                        </div>
                        <div className="contact-field">
                            <FontAwesomeIcon icon={faPhone} className="icon"/>
                            <span>0909 000 999</span>
                        </div>
                        <div className="contact-field">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                            <span>exampleemail@email.com</span>
                        </div>
                    </div>
                </div>
                <div className="row copy-right">
                    <div className="col">
                        <p>Copy Right 2020. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;