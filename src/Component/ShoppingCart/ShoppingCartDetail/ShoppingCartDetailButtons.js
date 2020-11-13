// direct child of ShoppingCartDetailProduct, display size and buttons of each product
import React, {useState} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
const ShoppingCartDetailButtons = (props) => {
    const {product, quantity, dispatch} = props;
    const [state, setState] = useState({
        updated_quantity: quantity.quantity
    });
    const {updated_quantity} = state;
    const changeUpdatedQuantityButtons = (ev, operator) => {
        ev.preventDefault();
        if (operator === "plus"){
            setState((prevState) => {
                return {
                    ...prevState,
                    updated_quantity: prevState.updated_quantity + 1
                }
            })
        } else {
            if (updated_quantity > 1) {
                setState((prevState) => {
                    return {
                        ...prevState,
                        updated_quantity: prevState.updated_quantity - 1
                    }
                })
            }
        }
    };
    return (
        <div className="row-product-buttons">
            <span className="title">Size</span>
            <span className="size">{quantity.size}</span>
            <button type="button" className="minus" onClick={(ev)=>{changeUpdatedQuantityButtons(ev, "minus")}}>
                <FontAwesomeIcon icon={faMinus}/>
            </button>
            <input type="number" value={updated_quantity} className="quantity" disabled/>
            <button type="button" className="plus" onClick={(ev)=>{changeUpdatedQuantityButtons(ev, "plus")}}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            <button type="button" className="update" onClick={()=>{dispatch({type: "UPDATE_CART", id: product.product_id, size: quantity.size, quantity: updated_quantity})}}>Cập nhật</button>
            <button type="button" className="delete" onClick={()=>{dispatch({type: "REMOVE_FROM_CART", id: product.product_id, size: quantity.size})}}>Xóa</button>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetailButtons)