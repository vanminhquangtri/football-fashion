// direct child of TopNav, use class component for animation with shouldComponentUpdate
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux";

class ShoppingCart extends Component {
    render() {
        // count total quantity of shopping cart
        const {Cart} = this.props.Store;
        var cartTotalQuantity = 0;
        Cart.forEach((product) => {
            product.quantity.forEach((size_quantity) => {
                cartTotalQuantity += size_quantity.quantity 
            })
        })
        return (
            <div className="col-auto shopping-cart">
                <div className="wrap">
                    <NavLink
                        to="/shopping-cart"
                        exact={true}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        <span className="shopping-cart-quantity">{cartTotalQuantity}</span>
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