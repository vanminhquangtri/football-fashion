import React from "react";
import {NavLink} from "react-router-dom";
import ProductInfo from "../../../Data/ProductInfo";
const TopViewed = () => {
    return (
        <section className="top-viewed">
            <div className="container-fluid">
                <div className="row">
                    {ProductInfo.map((product) => {
                        if (product.top_viewed || product.top_viewed === false ) {
                            return (
                                /* only render product having property top_viewed true, each product is a col */
                                <div className="col product-col" key={product.id}>
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
                                            <div className="member-point">
                                                {/* <FontAwesomeIcon icon={faUser} className="icon"/>  */}
                                                + {product.point} điểm
                                            </div>
                                        </NavLink>
                                    </div>                        
                                </div>
                            )
                        }
                        return "";
                    })}
                </div>
            </div>
        </section>
    );
};

export default TopViewed;