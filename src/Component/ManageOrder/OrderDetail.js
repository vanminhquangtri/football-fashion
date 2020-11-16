// direct child of Manage Order, show product sumary, contact and shipping address
// receive order that match ID from previous stage
import React from 'react';
import {NavLink} from "react-router-dom";
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
const OrderDetail = (props) => {
    const {matchedOrder, reseState} = props;
    return (
            <div className="order-detail-information">
                <div className="order-detail-title">
                    Chi tiết đơn hàng
                </div>
                {/* each product */}
                <div className="order-product-summary">
                    {matchedOrder.order_product.map((product) => {
                        return <CheckoutProduct
                            product={product} 
                            key={product.product_id}
                        />
                    })}
                </div>
                {/* other info: contact, shipping, payment method */}
                <div className="order-other-info">
                    <div className="contact">
                        <span className="info-title">Thông tin liên hệ</span>
                        <div className="name">
                            <span>Tên: {matchedOrder.last_name} {matchedOrder.first_name}</span>
                        </div>
                        <div className="phone">
                            <span>Điện thoại: {matchedOrder.tel}</span>
                        </div>
                        <div className="email">
                            <span>Email: {matchedOrder.email}</span>
                        </div>
                    </div>
                    <div className="shipping">
                        <span className="info-title">Địa chỉ nhận hàng</span>
                        <div className="shipping-address">
                            <div className="address-field">
                                {matchedOrder.house_no},
                            </div>
                            <div className="address-field">
                                {matchedOrder.street}, 
                            </div>
                            <div className="address-field">
                                {matchedOrder.ward},
                            </div>
                            <div className="address-field">
                                {matchedOrder.district},
                            </div>
                            <div className="address-field">
                                {matchedOrder.city}
                            </div>
                        </div>
                    </div>
                    <div className="payment">
                        <span className="info-title">Hình thức thanh toán</span>
                        <div className="payment-method">
                            {matchedOrder.payment_method === "payment_online" ? "Online" : "Tiền mặt"}
                        </div>
                    </div>
                </div>
                {/* navigate */}
                <div className="order-navigate">
                    <NavLink to="/manage-order" className="review" onClick={()=>{reseState()}}>Xem đơn hàng khác</NavLink>
                    <NavLink to="/leagues" className="shopping">Tiếp tục mua sắm</NavLink>
                </div>
            </div>
        );
};
export default OrderDetail;