import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
const CheckoutSuccess = (props) => {
    const {orderInfo} = props;
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="form-payment-success">
            <div className="title">Cảm ơn bạn đã đồng hành cùng chúng tôi</div>
            <div className="order-info">
                <span>Mã đơn hàng của bạn là</span>
                <span className="order-id">{orderInfo.order_id}</span>
                <span>Vui lòng lưu lại mã số này</span>
            </div>
            <div className="success-navigate">
                <NavLink to="/manage-order">Tra cứu đơn hàng</NavLink>
                <NavLink to="/leagues">Tiếp tục mua sắm</NavLink>
            </div>
            <div>Sản phẩm nổi bật</div>
        </div>
    );
};

export default CheckoutSuccess;