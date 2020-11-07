import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faGift} from "@fortawesome/free-solid-svg-icons";
import ProductsInfo from "../../../Data/ProductInfo";
import LoadProducts from "../../GeneralModules/LoadProducts";
import urlSlug from "url-slug";
import {connect} from "react-redux";
import formatNumber from "../../GeneralModules/FortmatMoney";
const SpecialPromotion = (props) => {
    const {Currency} = props.Store;
    const [state, setState] = useState({
        loaded_product_number: 8
    })
    const {loaded_product_number} = state;
    // find products with property top_viewed true
    const topPromotionProducts = ProductsInfo.filter((product) => {
        return parseFloat(product.promotion) > 15;
    });
    // return a number of top viewed product equal to loaded_product_number;
    let loadedProducts = [];
    topPromotionProducts.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    }) 
    return (
        <section className="display-homepage special-promotion">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-title">
                        <div className="background-image"></div>
                        <span className="title-text">
                            <FontAwesomeIcon icon={faGift} className="icon"/>
                            KHUYẾN MÃI SIÊU HẤP DẪN
                        </span>
                    </div>
                    {loadedProducts.map((product) => {
                        return (
                            /* only render product having property top_viewed true, each product is a col */
                            <div className="col product-col animate__animated animate__fadeInUp" key={product.id}>
                                <div className="wrap">
                                    <NavLink
                                        to={`/${urlSlug(product.name)}`} 
                                        exact={true}
                                    >
                                        <div 
                                            className="background-image"
                                        >
                                            <img alt="background" src={product.main_image.default}/>
                                        </div>
                                        <div className="info">
                                            <span className="name">{product.name}</span>
                                            <span className="price">{formatNumber((product.price * Currency.rate).toFixed(0))}{Currency.currency}</span>
                                        </div>
                                        {/* only render promotion box if promotion property of product is not empty */}
                                        {(product.promotion !== "") && (
                                            <div className="promotion">SALE<br/>{product.promotion}</div>
                                        )}
                                        {/* replace promotion box by star if promotion property of product is empty */}
                                        {(product.promotion === "") && (
                                            <div className="star">
                                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                            </div>
                                        )}
                                        <div className="member-point">
                                            {/* <FontAwesomeIcon icon={faUser} className="icon"/>  */}
                                            + {product.point} điểm
                                        </div>
                                    </NavLink>
                                </div>                        
                            </div>
                        )
                    })}
                    <div className="control-loaded-quantity">
                        <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, topPromotionProducts.length, setState)}}>
                            {loaded_product_number < topPromotionProducts.length ? "Xem thêm" : "Ẩn bớt"}
                        </button>
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
export default connect(mapStateToProps)(SpecialPromotion)