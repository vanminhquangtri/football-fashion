// direct child of ShoppingCartDetailProduct, display size and buttons of each product
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
const ShoppingCartDetailButtons = (props) => {
    const {product, quantity, dispatch, updateLCProducts} = props;
    const [state, setState] = useState({
        updated_quantity: quantity.quantity,
        update_LC: true
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
    useEffect(() => {
        // show announcement when click update
        const UpdateBtns = document.querySelectorAll(".row-product-buttons .update");
        const UpdateCartAnnounce = document.querySelector(".update-cart-annouce");
        if (UpdateBtns !== undefined) {
            for (let i = 0; i < UpdateBtns.length; i++) {
                UpdateBtns[i].addEventListener("click", () => {
                    UpdateCartAnnounce.style.right = 0; 
                })
            }
        }
    })
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
            <button 
                type="button" className="update" 
                onClick={()=>{
                    // dispatch({type: "UPDATE_CART", id: product.product_id, size: quantity.size, quantity: updated_quantity});
                    updateLCProducts(product.product_id, quantity.size, updated_quantity);
                    dispatch({type: "RE_RENDER"});
                }}
            >
            Cập nhật
            </button>
            <button type="button" className="delete" onClick={()=>{dispatch({type: "REMOVE_FROM_CART", id: product.product_id, size: quantity.size, quantity: updated_quantity})}}>Xóa</button>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetailButtons);