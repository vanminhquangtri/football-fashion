// direct child of Router URL
import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import ProductsInfo from '../../Data/ProductInfo';
import formatNumber from '../GeneralModules/FortmatMoney';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
const Checkout = (props) => {
    const {PaymentTarget, Currency} = props.Store;
    const PaidTarget = PaymentTarget.target;
    const [state, setState] = useState({
        show_product_summary: false,
        // order information
        last_name: "",
        first_name: "",
        email: "",
        tel: "",
        city: "",
        district: "",
        ward: "",
        street: "",
        house_no: ""
    });
    // update info when fill form
    const updateOrderInfo = (ev, info_name) => {
        const value = ev.target.value;
        ev.preventDefault();
        let currentState = {...state};
        currentState[info_name] = value;
        setState(() => {
            return currentState;
        })
    }
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
        // scroll to top
        window.scrollTo(0, 0); 
        // toggle product summary
        const toggleBtn = document.querySelector(".toggle-btn");
        const productSummary = document.querySelector(".row.check-out-product-summary");
        toggleBtn.addEventListener("click", () => {
            if (productSummary.style.maxHeight){
                toggleBtn.innerHTML = `
                <button>
                    Hiển thị chi tiết đơn hàng
                    <svg class="toggle-product-summary-btn open" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m257.778 386.671-257.778-257.778h128.886l128.892 128.889 128.886-128.897 128.892.008z"/></svg>
                </button>
                `;
                productSummary.style.maxHeight = null
            } else {
                toggleBtn.innerHTML = `
                <button>
                    Ẩn chi tiết đơn hàng
                    <svg class="toggle-product-summary-btn close" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m257.778 128.885 257.778 257.778h-128.886l-128.892-128.889-128.886 128.897-128.892-.008z"/></svg>
                </button>
                `;
                productSummary.style.maxHeight = productSummary.scrollHeight + "px";
            }
        })
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
                {/* toggle product summary */}
                <div className="row toggle-product-summary">
                    <div className="col">
                        <span className="title">Tổng cộng: <strong>{formatNumber(totalAmount)}<sup>{Currency.currency}</sup></strong></span>
                        <div className="content">
                            <div className="toggle-btn" onClick={(ev)=>{changeShow_product_summary(ev)}}>
                                <button>
                                    Hiển thị chi tiết đơn hàng
                                    <svg id="Capa_1" enableBackground="new 0 0 515.556 515.556" height={512} viewBox="0 0 515.556 515.556" width={512} xmlns="http://www.w3.org/2000/svg"><path d="m257.778 386.671-257.778-257.778h128.886l128.892 128.889 128.886-128.897 128.892.008z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product summary */}
                <div className="row check-out-product-summary">
                    <div className="col">
                        <div className="content">
                            {
                                PaidTarget.map((product) => {
                                    return (
                                        <CheckoutProduct 
                                            product={product} 
                                            key={product.product_id}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* form */}
                <CheckoutForm updateOrderInfo={updateOrderInfo} />
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