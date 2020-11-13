import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import urlSlug from "url-slug";
import freeShipImg from "../../../../Assets/images/product-layout/free-ship2.png"
import formatNumber from "../../../GeneralModules/FortmatMoney";
const AlsoLikeProduct = (props) => {
    const {Currency} = props.Store;
    const [state, setState] = useState({
        added_to_cart: false
    })
    const {product, dispatch} = props;
    const {added_to_cart} = state;
    const changeAddedToCartStt = () => {
        setState((prevState) => {
            return {
                ...prevState,
                added_to_cart: !prevState.added_to_cart
            }
        })
    }
    return (
        <div className="also-product also-like" key={product.id}>
            <div className="wrap inside">
                <NavLink
                    to={`/product-detail/${urlSlug(product.name)}`} 
                    exact={true}
                >
                    <div className="background-image">
                        <img alt="background" src={product.main_image.default}/>
                    </div>
                    <div className="info">
                        <span className="name">{product.name}</span>
                        <span className="price">{formatNumber((product.price * Currency.rate).toFixed(0))}<sup>{Currency.currency}</sup></span>
                    </div>
                    {/* only render promotion box if promotion property of product is not empty */}
                    {(product.promotion !== "") && (
                        <div className="promotion">SALE<br/>{product.promotion}</div>
                    )}
                    {/* replace promotion box by free ship if promotion property of product is empty */}
                    {(product.promotion === "") && (
                        <div className="free-ship">
                            <img alt="shipping-free" src={freeShipImg}/>
                        </div>
                    )}
                    <div className="member-point">
                        + {product.point} điểm
                    </div>
                </NavLink>
                <div className="add-to-cart-btn">
                    {/* only show this if state added_to_cart false, mean not added */}
                    {
                        added_to_cart === false ? (
                            <span className="not-added" onClick={()=>{dispatch({type: "ADD_TO_CART", id: product.id, quantity: 1, size: "M"}); changeAddedToCartStt()}}>Thêm vào giỏ</span>
                        ) : (
                            <>
                            <span className="added animate__animated animate__fadeInDown">
                                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                                <i>Đã thêm</i>
                            </span>
                            <span style={{marginLeft: "2px"}} className="added animate__animated animate__fadeInDown" onClick={()=>{dispatch({type: "REMOVE_FROM_CART", id: product.id, quantity: 1}); changeAddedToCartStt()}}>
                                <i>Xóa</i>
                                <FontAwesomeIcon icon={faMinusCircle} className="icon"/>
                            </span>
                            </>
                        )
                    }
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
export default connect(mapStateToProps)(AlsoLikeProduct)