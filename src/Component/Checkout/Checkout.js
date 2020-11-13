// direct child of Router URL
import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import ProductsInfo from '../../Data/ProductInfo';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons"
const Checkout = (props) => {
    const {PaymentTarget} = props.Store;
    const PaidTarget = PaymentTarget.target;
    const [state, setState] = useState({
        show_product_summary: false
    })
    // change status show_product_summary
    const changeShow_product_summary = (ev) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                show_product_summary: !prevState.show_product_summary
            }
        })
    }
    // calculate total amount of shopping cart
    var totalAmount = 0;
    // loop each product in cart
    PaidTarget.forEach((product) => {
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
       window.scrollTo(0, 0); 
    },[])
    return (
        <section className="check-out">
            <div className="container-fluid">
                <div className="row check-out-tile">
                    <div className="col">
                        <div className="content">
                            <span>Thanh toán</span>
                        </div>
                    </div>
                </div>
                <div className="row toggle-product-summary">
                    <div className="col">
                        <div className="content">
                            {state.show_product_summary === false ? (
                                <div className="open-toggle" onClick={(ev)=>{changeShow_product_summary(ev)}}>
                                    Hiển thị thông tin đơn hàng
                                    <FontAwesomeIcon icon={faChevronDown} className="icon"/>
                                    <span className="title">{totalAmount}</span>
                                </div>
                                ) : (
                                <div className="close-toggle" onClick={(ev)=>{changeShow_product_summary(ev)}}>
                                    Ẩn thông tin đơn hàng
                                    <FontAwesomeIcon icon={faChevronUp} className="icon"/>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {state.show_product_summary && (
                    <div className="row check-out-product-summary">
                        <div className="col">
                            <div className="content">
                                {
                                    PaidTarget.map((product) => {
                                        return (
                                            <CheckoutProduct product={product} key={product.id}/>
                                        )
                                    })
                                }
                                <span className="title">Tổng cộng: {totalAmount}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(Checkout)