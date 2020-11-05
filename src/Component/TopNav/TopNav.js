import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import ShoppingCart from './ShoppingCart';

const TopNav = (props) => {
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
                            </ul>
                            {/* only show sub menu if state of submenu is true */}
                            {sub_menu && (
                                <ul className="sub-menu animate__animated animate__fadeInLeft">
                                    <li>
                                        <NavLink
                                        to="/best-sales"
                                        exact={true}
                                        >
                                            Top Sales
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/champion"
                                        exact={true}
                                        >
                                            Nhà vô địch
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/sale-off"
                                        exact={true}
                                        >
                                            Khuyễn mãi hấp dẫn
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Trọn bộ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Liên hệ
                                        </NavLink>
                                    </li>
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