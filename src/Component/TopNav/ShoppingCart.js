// direct child of TopNav
import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux";

const ShoppingCart = (props) => {
    const {Cart} = props.Store;
    // count total quantity of shopping cart
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
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCart)