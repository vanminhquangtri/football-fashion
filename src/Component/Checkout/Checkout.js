import React from 'react';
import {connect} from "react-redux";

const Checkout = (props) => {
    const {Cart, Currency, PaymentTarget} = props.Store;
    console.log(PaymentTarget);
    return (
        <div>
            Check Out Page
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(Checkout)