// direct child of ProductDetail component, contain buttons add to cart, plus, minus, size, size
import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import formatNumber from '../GeneralModules/FortmatMoney';

const AddToCart = (props) => {
    const {Currency} = props.Store;
    const {product, dispatch} = props;
    const [state, setState] = useState({
        product_id: product.id,
        added_quantity: 1,
        size: "S",
    });
    const {added_quantity} = state;
    // change state added_quantity when click minus button when input value change
    const changeAddedQuantity = (ev) => {
        ev.preventDefault();
        var value = ev.target.value;
        if (value !== "") {
            setState((prevState) => {
                return {
                    ...prevState,
                    added_quantity: parseFloat(value)
                }
            })
        } else {
            setState((prevState) => {
                return {
                    ...prevState,
                    added_quantity: value
                }
            })
        }
    }
    // minus state added_quantity when click minus button
    const minusAddedQuantity = (ev) => {
        ev.preventDefault();
        if (added_quantity > 1) {
            setState((prevState) => {
                return {
                    ...prevState,
                    added_quantity: prevState.added_quantity - 1
                }
            })
        }
    }
    // plus state added_quantity when click plus button
    const plusAddedQuantity = (ev) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                added_quantity: prevState.added_quantity + 1
            }
        })
    }
    // change state size when click size boxs
    const changeSize = (s) => {
        setState((prevState) => {
            return {
                ...prevState,
                size: s
            }
        })
    }
    useEffect(() => {
        // change color of size box if clicked
        const sizeBoxs = document.querySelectorAll(".size-box");
        sizeBoxs[0].style.backgroundColor = "rgb(211, 9, 9)";
        for (let i = 0; i < sizeBoxs.length; i ++) {
            sizeBoxs[i].addEventListener("click", () => {
                // make other box to default color;
                for (let k = 0; k < sizeBoxs.length; k++) {
                    sizeBoxs[k].style.backgroundColor = "#3d88fb";
                };
                // change color of the click box
                sizeBoxs[i].style.backgroundColor = "rgb(211, 9, 9)";
            })
        };
    },[])
    useEffect(() => {
        // dispatch the current product to store for payment
        dispatch({type: "ADD_TO_SEPARATE_PRODUCT", paidProduct: {product_id: product.id, quantity: [{size: state.size, quantity: state.added_quantity}]}})
    },[product, state, dispatch])
    return (
        <div className="container-fluid product-add-to-cart">
            <div className="row">
                <div className="col">
                    <div className="wrap">
                        {/* display all size of product */}
                        <div className="size">
                            <div className="title">Chọn size</div>
                            {product.size.map((s) => {
                                return (
                                    <div className={`size-box ${s}`} key={s} onClick={()=>{changeSize(s)}}>{s}</div>
                                )
                            })}
                        </div>
                        {/* button plus, minus, quantity */}
                        <div className="buttons">
                            <span className="title">Số lượng:</span>
                            <button className="minus" onClick={(ev)=>{minusAddedQuantity(ev)}}>
                                <FontAwesomeIcon icon={faMinusCircle} className="icon"/>
                            </button>
                            <input className="quantity" type="number" min="1" value={added_quantity} onChange={(ev)=>{changeAddedQuantity(ev)}}/>
                            <button className="plus" onClick={(ev)=>{plusAddedQuantity(ev)}}>
                                <FontAwesomeIcon icon={faPlusCircle} className="icon"/>
                            </button>
                        </div>
                        {/* show sub total */}
                        <div className="sub-total">
                            <span className="title">Tổng cộng:</span>
                            <span className="amount">
                                {formatNumber(product.price * added_quantity)}{Currency.currency}
                            </span>
                        </div>
                        {/* button add to cart and check-out */}
                        <div className="btn-add-to-cart">
                            <button className="add-to-cart" onClick={(ev)=>{ev.preventDefault(); dispatch({type: "ADD_TO_CART", id: product.id, size: state.size, quantity: state.added_quantity})}}>Thêm vào giỏ hàng</button>
                            <button className="check-out-each-product">
                                <NavLink to="/check-out" onClick={()=>{dispatch({type: "PAY_SEPARATE"})}}>Mua ngay</NavLink>
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