// direct child of RouterURL, display all product add to shopping cart
import React from 'react';
import {connect} from "react-redux";
const ShoppingCartDetail = (props) => {
    const {Cart} = props.Store;
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
    let Products = []
    currentCartIdList.forEach((id) => {
        var newObj = {};
        newObj.product_id = id;
        newObj.quantity = [];
        Products.push(newObj);
    });
    // add quantity and size to each ID
    Products.forEach((product) => {
        currentCart.forEach((order) => {
            if (order.product_id === product.product_id) {
                var orderSizeAndQuantity = {
                    size: order.size,
                    quantity: order.quantity
                };
                product.quantity.push(orderSizeAndQuantity)
            }
        })
    });
    // remove duplicate quantity objects the have same size
    Products.forEach((product) => {
        // create size list
        var sizeList = [];
        product.quantity.forEach((obj)=>{
            if (sizeList.indexOf(obj.size) === -1){
                sizeList.push(obj.size);
            }
        });
        // create initial quanity of each size
        var sizeQuanity = [];
        sizeList.forEach((size) => {
            sizeQuanity.push({size: size, quantity: 0})
        })
        // count quantity of each size in product.quantity
        sizeQuanity.forEach((size) => {
            product.quantity.forEach((quantityObj) => {
                if (quantityObj.size === size.size) {
                    size.quantity += quantityObj.quantity
                }
            })
        })
        product.quantity = sizeQuanity
    })
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