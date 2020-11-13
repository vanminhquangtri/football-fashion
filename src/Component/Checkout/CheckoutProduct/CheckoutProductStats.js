// direct child of CheckoutProduct
import React from 'react';
import formatNumber from '../../GeneralModules/FortmatMoney';
const CheckoutProductStats = (props) => {
    const {targetProduct, quantity, currency} = props;
    return (
        <div className="row-product-buttons">
            <span className="product-quantity-title">Size</span>
            <span className="value size">{quantity.size}</span>
            <span className="product-quantity-title">Số lượng</span>
            <span className="value">{quantity.quantity}</span>
            <span className="product-quantity-title">Thành tiền</span>
            <span className="value totalEachSize">{formatNumber(targetProduct.price * quantity.quantity)}<sup>{currency}</sup></span>
        </div>
    )
};
export default CheckoutProductStats;