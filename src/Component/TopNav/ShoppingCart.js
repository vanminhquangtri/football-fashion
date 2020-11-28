// direct child of TopNav
import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux";
const ShoppingCart = (props) => {
    // get the list of product ID from local storage
    var storageProductId;
    if (window.localStorage.productID !== undefined) {
        storageProductId = JSON.parse(window.localStorage.productID);
    };
    var storageProductLength = 0;
    if (window.localStorage.productID !== undefined) {
        storageProductId = JSON.parse(window.localStorage.productID);
        storageProductId.forEach((product) => {
            storageProductLength += product.quantity;
        })
    };
    return (
        <div className="col-auto shopping-cart">
            <div className="wrap">
                <NavLink
                    to="/shopping-cart"
                    exact={true}
                >
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                    <span className="shopping-cart-quantity">{storageProductLength}</span>
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