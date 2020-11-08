// display product home page
import React from "react";
import {NavLink} from "react-router-dom";
import urlSlug from "url-slug";
import {connect} from "react-redux";
import formatNumber from "../../GeneralModules/FortmatMoney";
import freeShipImg from "../../../Assets/images/product-layout/free-ship2.png"

const ProductLayout = (props) => {
    const {Currency} = props.Store;
    const {product, dispatch} = props;
    return (
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
                        <div className="free-ship">
                            <img alt="shipping-free" src={freeShipImg}/>
                        </div>
                    )}
                    <div className="member-point">
                        {/* <FontAwesomeIcon icon={faUser} className="icon"/>  */}
                        + {product.point} điểm
                    </div>
                </NavLink>
                <div className="add-to-cart-btn">
                    <span onClick={()=>{dispatch({type: "ADD_TO_CART", id: product.id, quantity: 1})}}>Thêm vào giỏ</span>
                </div>
            </div>                        
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ProductLayout)