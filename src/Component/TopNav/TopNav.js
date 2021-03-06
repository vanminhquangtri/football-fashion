import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faBars, faTimesCircle, faTimes} from "@fortawesome/free-solid-svg-icons"
import ShoppingCart from './ShoppingCart';

const TopNav = () => {
    const [state, setState] = useState({
        sub_menu: false
    })
    const {sub_menu} = state;
    const changeSubMenuStt = () => {
        setState((prevState) => {
            return {
                ...prevState,
                sub_menu: !prevState.sub_menu
            }
        })
    }
    return (
        <section className="top-nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="col nav">
                        <div className="wrap">
                            {/* main menu */}
                            <ul className="main-nav">
                                <li>
                                    <NavLink
                                     to="/"
                                     exact={true}
                                    >
                                        <FontAwesomeIcon icon={faHome} className="icon"/>
                                    </NavLink>
                                </li>
                                {/* only show close button if state of submenu is true */}
                                {sub_menu === false && (
                                    <FontAwesomeIcon 
                                        icon={faBars} 
                                        className="icon animate__animated animate__zoomIn"
                                        onClick={()=>{changeSubMenuStt()}}
                                    />
                                )}
                                {/* only show close button if state of submenu is true */}
                                {sub_menu && (
                                    <FontAwesomeIcon 
                                        icon={faTimes} 
                                        className="icon animate__animated animate__rotateIn"
                                        onClick={()=>{changeSubMenuStt()}}
                                    />
                                )}
                                <li>
                                    <NavLink
                                     to="/manage-order"
                                     exact={true}
                                    >
                                        <span className="link-text">ĐƠN HÀNG</span>
                                    </NavLink>
                                </li>
                                <li style={{display: "none"}} className="show-from-576">
                                    <NavLink
                                    to="/leagues"
                                    exact={true}
                                    >
                                        <span className="link-text">GIẢI ĐẤU</span>
                                    </NavLink>
                                </li>
                                <li style={{display: "none"}} className="show-from-576">
                                    <NavLink
                                    to="/promotion"
                                    exact={true}
                                    >
                                        <span className="link-text">KHUYẾN MÃI</span>
                                    </NavLink>
                                </li>
                                <li style={{display: "none"}} className="show-from-576">
                                    <NavLink
                                    to="/contact"
                                    exact={true}
                                    >
                                        <span className="link-text">LIÊN HỆ</span>
                                    </NavLink>
                                </li>
                                <li style={{display: "none"}} className="show-from-576">
                                    <NavLink
                                    to="/account"
                                    exact={true}
                                    >
                                        <span className="link-text">ĐĂNG NHẬP</span>
                                    </NavLink>
                                </li>
                            </ul>
                            {/* only show sub menu if state of submenu is true */}
                            {sub_menu && (
                                <ul className="sub-menu animate__animated animate__fadeInLeft">
                                    <li>
                                        <NavLink
                                        to="/leagues"
                                        exact={true}
                                        >
                                            Xem theo giải đấu
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/promotion"
                                        exact={true}
                                        >
                                            Sản phẩm đang khuyễn mãi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/contact"
                                        exact={true}
                                        >
                                            Liên hệ chúng tôi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/account"
                                        exact={true}
                                        >
                                            Đăng nhập
                                        </NavLink>
                                    </li>
                                    <FontAwesomeIcon 
                                        icon={faTimesCircle} 
                                        className="icon animate__animated animate__rotateIn"
                                        onClick={()=>{changeSubMenuStt()}}
                                    />
                                </ul>
                            )}
                        </div>
                    </div>
                    {/* shopping cart icon */}
                    <ShoppingCart/>
                </div>
            </div>
        </section>
    );
};

export default TopNav;