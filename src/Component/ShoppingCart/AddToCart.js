// direct child of ProductDetail component, contain buttons add to cart, plus, minus, size, size
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import formatNumber from '../GeneralModules/FortmatMoney';

const AddToCart = (props) => {
    const {Currency} = props.Store;
    const {product} = props;
    const [state, setState] = useState({
        added_quantity: 1,
    })
    const {added_quantity} = state;
    return (
        <div className="container-fluid product-add-to-cart">
            <div className="row">
                <div className="col">
                    <div className="wrap">
                        <div className="size">
                            <div className="title">Chọn size</div>
                            {product.size.map((s) => {
                                return (
                                    <div className={`size-box ${s}`} key={s}>{s}</div>
                                )
                            })}
                        </div>
                        <div className="buttons">
                            <span className="title">Số lượng:</span>
                            <button className="minus">
                                <FontAwesomeIcon icon={faMinusCircle} className="icon"/>
                            </button>
                            <input className="quantity" type="number" min="1" defaultValue={added_quantity}/>
                            <button className="plus">
                                <FontAwesomeIcon icon={faPlusCircle} className="icon"/>
                            </button>
                        </div>
                        <div className="sub-total">
                            <span className="title">Tổng cộng:</span>
                            <span className="amount">
                                {formatNumber(product.price)}{Currency.currency}
                            </span>
                        </div>
                        <div className="btn-add-to-cart">
                            <button className="add-to-cart">Thêm vào giỏ hàng</button>
                            <button className="check-out">
                                <NavLink to="/check-out">Thanh toán</NavLink>
                            </button>
                        </div>
                    </div>
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
export default connect(mapStateToProps)(AddToCart)