// direct child of TopNav, use class component for animation with shouldComponentUpdate
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

class ShoppingCart extends Component {
    render() {
        return (
            <div className="col-auto shopping-cart">
                <div className="wrap">
                    <NavLink
                        to="/"
                        exact={true}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        <span className="shopping-cart-quantity">12</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;