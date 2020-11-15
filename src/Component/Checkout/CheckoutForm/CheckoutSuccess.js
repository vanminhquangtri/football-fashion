import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import congraImg from "../../../Assets/images/section-check-out/congra.png";
const CheckoutSuccess = (props) => {
    const {orderInfo} = props;
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="form-payment-success">
            <div className="congra-image animate__animated animate__bounceIn">
                <img alt="success confirm" src={congraImg}/>
            </div>
            <div className="success-title">Xác nhận thành công. Mã đơn hàng của bạn là</div>
            <div className="order-info">
                <span className="order-id">{orderInfo.order_id}</span> <br/>
                <span>Vui lòng lưu lại mã số này</span>
            </div>
            <div className="success-navigate">
                <NavLink to="/manage-order" className="order-retrieve">Tra cứu đơn hàng</NavLink>
                <NavLink to="/leagues">Tiếp tục mua sắm</NavLink>
            </div>
        </div>
    );
};

export default CheckoutSuccess;