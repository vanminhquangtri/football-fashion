// direct child of ShoppingCartDetail, display each product in shopping cart
import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import ProductsInfo from '../../../Data/ProductInfo';
import formatNumber from '../../GeneralModules/FortmatMoney';
import urlSlug from "url-slug";
const ShoppingCartDetailProduct = (props) => {
    const {Currency} = props.Store;
    const {product, dispatch} = props;
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
                    <NavLink to={`/product-detail/${urlSlug(targetProduct.name)}`} className="info name">
                        {targetProduct.name}
                    </NavLink>
                    <span className="info price">{formatNumber(targetProduct.price)}<sup>{Currency.currency}</sup></span>
                </div>
            </div>
            {/* show size, quantity and buttons (plus, minus, update, delete) */}
            {product.quantity.map((quantity) => {
                return (
                    <div className="row-product-buttons" key={`${product.product_id}${quantity.size}`}>
                        <span className="title">Size</span>
                        <span className="size">{quantity.size}</span>
                        <button type="button" className="minus">
                            <FontAwesomeIcon icon={faMinus}/>
                        </button>
                        <input type="number" defaultValue={quantity.quantity} className="quantity"/>
                        <button type="button" className="plus">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button type="button" className="update">Cập nhật</button>
                        <button type="button" className="delete" onClick={()=>{dispatch({type: "REMOVE_FROM_CART", id: product.product_id})}}>Xóa</button>
                    </div>
                )
            })}
        </div>);
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetailProduct)