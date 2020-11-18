import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
    return (
        <section className="footer">
            <div className="container-fluid">
                <div className="row link-contact">
                    <div className="col social-media">
                        <div className="wrap">
                            <div className="title">Kết nối với chúng tôi</div>
                            <div className="icon-link">
                                <NavLink to="/promotion" exact={true} className="facebook" title="Facebook"></NavLink>
                                <NavLink to="/champion" exact={true} className="youtube" title="Youtube"></NavLink>
                                <NavLink to="/concerned" exact={true} className="twitter" title="Twitter"></NavLink>
                                <NavLink to="/concerned" exact={true} className="instagram" title="Instagram"></NavLink>
                            </div>
                        </div>
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
                            <span>example@email.com</span>
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