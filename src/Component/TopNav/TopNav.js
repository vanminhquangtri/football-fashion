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
                                {sub_menu === false && (
                                    <li onClick={()=>{changeSubMenuStt()}}>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            <FontAwesomeIcon icon={faBars} className="icon animate__animated animate__zoomIn"/>
                                        </NavLink>
                                    </li>
                                )}
                                {/* only show close button if state of submenu is true */}
                                {sub_menu && (
                                    <li onClick={()=>{changeSubMenuStt()}}>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            <FontAwesomeIcon icon={faTimes} className="icon animate__animated animate__rotateIn"/>
                                        </NavLink>
                                    </li>
                                )}
                                <li>
                                    <NavLink
                                     to="/"
                                     exact={true}
                                    >
                                        MANAGER ORDER
                                    </NavLink>
                                </li>
                            </ul>
                            {/* only show sub menu if state of submenu is true */}
                            {sub_menu && (
                                <ul className="sub-menu animate__animated animate__fadeInLeft">
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Best Sales
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Champions Fashion
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Special Promotions
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Full Kits
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                        to="/"
                                        exact={true}
                                        >
                                            Contact
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