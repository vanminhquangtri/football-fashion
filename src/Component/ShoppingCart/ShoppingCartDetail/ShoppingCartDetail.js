// direct child of RouterURL, display all product add to shopping cart
import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
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
                            <span className="title">Products</span>
                            {/* render every product in shopping, each product is is row */}
                            <div className="shopping-cart-product-layout">
                                {/* show image, name, price, club name */}
                                <div className="image-info">
                                    <div className="product-image">
                                        <img alt="shopping-cart" src="https://i.pinimg.com/originals/21/49/41/214941e9ba2342fb8c4d9113052c8a2c.jpg"/>
                                    </div>
                                    <div className="product-info">
                                        <NavLink to="/shopping-cart" className="info name">
                                            Áo đấu Chelsea sân nhà mùa giải 2020/2021 - biểu tượng The Blues
                                        </NavLink>
                                        <span className="info price">1,900,000d</span>
                                    </div>
                                </div>
                                {/* show size, quantity and buttons (plus, minus, update, delete) */}
                                <div className="row-product-buttons">
                                    <span className="title">Size</span>
                                    <span className="size">2XL</span>
                                    <button type="button" className="minus">
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </button>
                                    <input type="number" defaultValue={1} className="quantity"/>
                                    <button type="button" className="plus">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                    <button type="button" className="update">Cập nhật</button>
                                    <button type="button" className="delete">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row product-detail-wrapper">
                    <div className="col">
                        <div className="content">
                            <span className="title">Products</span>
                            {/* render every product in shopping, each product is is row */}
                            <div className="shopping-cart-product-layout">
                                {/* show image, name, price, club name */}
                                <div className="image-info">
                                    <div className="product-image">
                                        <img alt="shopping-cart" src="https://i.pinimg.com/originals/21/49/41/214941e9ba2342fb8c4d9113052c8a2c.jpg"/>
                                    </div>
                                    <div className="product-info">
                                        <NavLink to="/shopping-cart" className="info name">
                                            Áo đấu Chelsea sân nhà mùa giải 2020/2021 - biểu tượng The Blues
                                        </NavLink>
                                        <span className="info price">1,900,000d</span>
                                    </div>
                                </div>
                                {/* show size, quantity and buttons (plus, minus, update, delete) */}
                                <div className="row-product-buttons">
                                    <span className="title">Size</span>
                                    <span className="size">2XL</span>
                                    <button type="button" className="minus">
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </button>
                                    <input type="number" defaultValue={1} className="quantity"/>
                                    <button type="button" className="plus">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                    <button type="button" className="update">Cập nhật</button>
                                    <button type="button" className="delete">Xóa</button>
                                </div>
                                <div className="row-product-buttons">
                                    <span className="title">Size</span>
                                    <span className="size">2XL</span>
                                    <button type="button" className="minus">
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </button>
                                    <input type="number" defaultValue={1} className="quantity"/>
                                    <button type="button" className="plus">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                    <button type="button" className="update">Cập nhật</button>
                                    <button type="button" className="delete">Xóa</button>
                                </div>
                            </div>
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