// direct child of ShoppingCartDetail, display each product in shopping cart
import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import ProductsInfo from '../../../Data/ProductInfo';
import formatNumber from '../../GeneralModules/FortmatMoney';
import urlSlug from "url-slug";
import ShoppingCartDetailButtons from './ShoppingCartDetailButtons';
const ShoppingCartDetailProduct = (props) => {
    const {Currency} = props.Store;
    const {product} = props;
    // get product information based on Id of product props;
    const targetProduct = ProductsInfo.find((p) => {
        return p.id === product.product_id;
    })
    return (
        product.size_quantity.length !== 0 && (
            <div className="shopping-cart-product-layout">
                {/* show image, name, price, club name */}
                <div className="image-info">
                    <div className="product-image">
                        <img alt={targetProduct.name} src={targetProduct.main_image.default}/>
                    </div>
                    <div className="product-info">
                        <NavLink to={`/product-detail/${urlSlug(targetProduct.name)}`} className="info name">
                            {targetProduct.name}
                        </NavLink>
                        <span className="info price">{formatNumber(targetProduct.price)}<sup>{Currency.currency}</sup></span>
                        <div className="product-btn-inside" style={{display: "none"}}>
                            {product.size_quantity.map((quantity) => {
                            return (
                                    <ShoppingCartDetailButtons 
                                        key={`${product.product_id}-size${product.size_quantity.size}`} 
                                        quantity={quantity} product={product} 
                                        style={{display: "none"}}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* show size, quantity and buttons (plus, minus, update, delete) */}
                {product.size_quantity.map((size_quantity) => {
                    return (
                        <ShoppingCartDetailButtons key={`${product.product_id}-size${size_quantity.size}`} quantity={size_quantity} product={product}/>
                    )
                })}
            </div>
        )
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetailProduct)