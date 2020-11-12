// direct child of RouterURL, display all product add to shopping cart
import React from 'react';
import {connect} from "react-redux";
const ShoppingCartDetail = (props) => {
    const {Currency, Cart} = props.Store;
    // get current items already added to cart
    const currentCart = [...Cart];
    // get ID list from Cart
    let currentCartIdList = [];
    currentCart.forEach((item) => {
        if (currentCartIdList.indexOf(item.product_id) === -1){
            currentCartIdList.push(item.product_id)
        }
    });
    // create number of object equal to length of ID list;
    let items = []
    currentCartIdList.forEach((id) => {
        var newObj = {};
        newObj.product_id = id;
        newObj.quantity = [];
        items.push(newObj);
    });
    // add quantity and size to each ID
    items.forEach((item) => {
        currentCart.forEach((order) => {
            if (order.product_id === item.product_id) {
                var orderSizeAndQuantity = {
                    size: order.size,
                    quantity: order.quantity
                };
                item.quantity.push(orderSizeAndQuantity)
            }
        })
    });
    console.log(currentCart);
    console.log(items);
    return (
        <section className="shopping-cart-detail">
            <div className="container-fluid">
                <div className="row title-wrapper">
                    <div className="col">
                        <div className="content">
                            Your Shopping Cart
                        </div>  
                    </div>
                </div>
                <div className="row product-detail-wrapper">
                    <div className="col">
                        <div className="content">
                            {/* render every product in shopping, each product is is row */}
                        </div>
                    </div>
                </div>
                <div className="row checkout-wrapper">
                    <div className="col">
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetail)