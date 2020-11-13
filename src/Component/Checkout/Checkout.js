// direct child of Router URL
import React, {useEffect} from 'react';
import {connect} from "react-redux";
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
const Checkout = (props) => {
    const {Cart, Currency, PaymentTarget} = props.Store;
    console.log(PaymentTarget.target);
    const PaidTarget = PaymentTarget.target
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
                <div className="row check-out-product-summary">
                    <div className="col">
                        <div className="content">
                            <span className="title">Đơn hàng của bạn</span>
                            {
                                PaidTarget.map((product) => {
                                    return (
                                        <CheckoutProduct product={product} key={product.id}/>
                                    )
                                })
                            }
                        </div>
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
export default connect(mapStateToProps)(Checkout)