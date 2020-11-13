// direct child of check out
import React from 'react';
import {connect} from "react-redux";
import ProductsInfo from '../../../Data/ProductInfo';
import formatNumber from '../../GeneralModules/FortmatMoney';
import CheckoutProductStats from './CheckoutProductStats';
const CheckoutProduct = (props) => {
    const {Currency} = props.Store;
    const {product} = props;
    // get product information based on Id of product props;
    const targetProduct = ProductsInfo.find((p) => {
        return p.id === product.product_id;
    })
    return (
        <div className="shopping-cart-product-layout">
            {/* show image, name, price, club name */}
            <div className="image-info">
                <div className="product-image">
                    <img alt={targetProduct.name} src={targetProduct.main_image.default}/>
                </div>
                <div className="product-info">
                    <span className="info name">{targetProduct.name}</span>
                    <span className="info price">Giá: {formatNumber(targetProduct.price)}<sup>{Currency.currency}</sup></span>
                </div>
            </div>
            {/* show size, quantity and total amount of each size */}
            {product.quantity.map((quantity) => {
                return (
                    <CheckoutProductStats 
                        key={`${product.product_id}-size${quantity.size}`} 
                        quantity={quantity} 
                        targetProduct={targetProduct} 
                        currency={Currency.currency}
                    />
                )
            })}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(CheckoutProduct)