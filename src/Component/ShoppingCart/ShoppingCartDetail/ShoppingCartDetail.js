// direct child of RouterURL, display all product add to shopping cart
import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import ShoppingCartDetailProduct from './ShoppingCartDetailProduct';
import ProductsInfo from '../../../Data/ProductInfo';
import Outstanding from '../../Products/ProductDetail/Outstanding/Outstanding';
import formatNumber from '../../GeneralModules/FortmatMoney'; 

const ShoppingCartDetail = (props) => {
    const {Cart, Currency} = props.Store;
    const {dispatch} = props;
    // calculate total amount of shopping cart
    var totalAmount = 0;
    // loop each product in cart
    Cart.forEach((product) => {
        // get price of product
        var productPrice;
        ProductsInfo.forEach((p) => {
            if (p.id === product.product_id) {
                productPrice = p.price;
            }
        });
        // loop all quantity object of product, multiply product price with quantity and plus to totalAmount
        product.quantity.forEach((size_quantity) => {
            totalAmount += productPrice * size_quantity.quantity
        })
    });
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0)
    },[])
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
                                Cart.map((product) => {
                                    return <ShoppingCartDetailProduct key={`shopping-cart-product-${product.product_id}`} product={product}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* show total amount and link to check out */}
                {(Cart.length !== 0) && (
                    <div className="row checkout-wrapper">
                        <div className="col">
                            <div className="content">
                                <div className="total-amount">
                                    Tổng cộng: <strong>{formatNumber(totalAmount)}<sup>{Currency.currency}</sup></strong>
                                </div>
                                <div className="checkout-link">
                                    <NavLink to="/check-out" onClick={()=>{dispatch({type: "PAY_WHOLE_CART"})}}>
                                        Thanh toán
                                    </NavLink> <br/>
                                    <img alt="payment card" src={require("../../../Assets/images/section-shopping-cart-detail/payment-card.png").default}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Outstanding product={ProductsInfo[39]} key={`shopping-cart-outstanding${ProductsInfo[39].id}`}/>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetail)