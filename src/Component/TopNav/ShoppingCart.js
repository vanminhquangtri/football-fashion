// direct child of TopNav, use class component for animation with shouldComponentUpdate
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux";

class ShoppingCart extends Component {
    render() {
        const {Cart} = this.props.Store;
        return (
            <div className="col-auto shopping-cart">
                <div className="wrap">
                    <NavLink
                        to="/shopping-cart"
                        exact={true}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        <span className="shopping-cart-quantity">{Cart.length}</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCart)