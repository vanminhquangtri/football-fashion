import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ProductsInfo from "../../../Data/ProductInfo";
import LoadProducts from "../../GeneralModules/LoadProducts";
const TopViewed = () => {
    
    const [state, setState] = useState({
        loaded_product_number: 8
    })
    const {loaded_product_number} = state;
    // find products with property top_viewed true
    const topViewedProducts = ProductsInfo.filter((product) => {
        return product.top_viewed === true;
    });
    // return a number of top viewed product equal to loaded_product_number;
    let loadedProducts = [];
    topViewedProducts.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    }) 
    return (
        <section className="top-viewed">
            <div className="container-fluid">
                <div className="row">
                    {loadedProducts.map((product) => {
                        return (
                            /* only render product having property top_viewed true, each product is a col */
                            <div className="col product-col animate__animated animate__fadeInUp" key={product.id}>
                                <div className="wrap">
                                    <NavLink to="/" exact={true}>
                                        <div 
                                            className="background-image"
                                        >
                                            <img alt="background" src={product.main_image.default}/>
                                        </div>
                                        <div className="info">
                                            <span className="name">{product.name}</span>
                                            <span className="price">{product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span>
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
                        <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, topViewedProducts.length, setState)}}>
                            {loaded_product_number < topViewedProducts.length ? "Tải thêm" : "Ẩn bớt"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopViewed;