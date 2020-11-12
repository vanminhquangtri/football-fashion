// direct child of RouterURL, display all product add to shopping cart
import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import ShoppingCartDetailProduct from './ShoppingCartDetailProduct';
import ProductsInfo from '../../../Data/ProductInfo';
import Outstanding from '../../Products/ProductDetail/Outstanding/Outstanding';
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
    });
    return (
        <section className="shopping-cart-detail">
            <div className="container-fluid">
                <div className="row title-wrapper">
                    <div className="col">
                        <div className="content">
                            Quản Lý Giỏ Hàng
                        </div>  
                    </div>
                </div>
                <div className="row product-detail-wrapper">
                    <div className="col">
                        <div className="content">
                            {/* render every product in shopping, each product is is row */}
                            {
                                (Cart.length === 0) && (
                                    <div className="empty-cart-announcement">
                                        <span>Bạn chưa có sản phẩm trong giỏ hàng, vui lòng thêm sản phẩm vào giỏ</span><br/>
                                        <NavLink to="/leagues">Chọn sản phẩm</NavLink>
                                    </div>
                                )
                            }
                            {
                                Products.map((product) => {
                                    return <ShoppingCartDetailProduct key={product.product_id} product={product}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                {(Cart.length !== 0) && (
                    <div className="row checkout-wrapper">
                        <div className="col">
                            <div className="content">
                                <div className="total-amount">
                                    Tổng cộng: <strong>20,000,000đ</strong>
                                </div>
                                <div className="checkout-link">
                                    <NavLink to="/shopping-cart" >
                                        Thanh toán
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Outstanding product={ProductsInfo[1]} key={`outstanding${ProductsInfo[0].id}`}/>

        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetail)