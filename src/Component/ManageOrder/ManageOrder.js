// direct child of RouterURL
import React, {useState} from 'react';
import {connect} from "react-redux";
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
const ManageOrder = (props) => {
    const {Currency, Orders} = props.Store;
    console.log(Orders);
    const [state, setState] = useState({
        verify_status: "",
        searched_order_id: "", // only need to passed id of the order
        searched_email: "", // only need to passed id of the order
    });
    const {verify_status} = state;
    // update email and order id to state when filling form
    const updateSearchCriteria = (ev, criteria) => {
        const value = ev.target.value;
        let currentState = {...state};
        currentState[criteria] = value;
        currentState.verify_status = ""
        setState(() => {
            return currentState
        })
    }
    // find the order when submit form
    const findOrder = (ev) => {
        ev.preventDefault();
        // find any order have same id and email with value user fill in
        const findResult = Orders.some((order) => {
            return order.order_id === state.searched_order_id && order.email === state.searched_email
        });
        if (findResult) {
            setState((prevState) => {
                return {
                    ...prevState,
                    verify_status: "successful"
                }
            })
        } else {
            setState((prevState) => {
                return {
                    ...prevState,
                    verify_status: "failed"
                }
            })
        }
    }
    return (
        <section className="manage-order">
            <div className="container-fluid">
                {/* title at top */}
                <div className="row manage-order-tile">
                    <div className="col">
                        <div className="content">
                            <span>Quản lý đơn hàng</span>
                        </div>
                    </div>
                </div>
                {/* verify email and order id, show this if verify state is failed or empty */}
                <div className="row manage-order-verify">
                    <div className="col">
                        <div className="content">
                            <form 
                                className="form-verify-order"
                                onSubmit={(ev)=>{findOrder(ev)}}
                            >
                                <label className="big-label">Vui lòng nhập các thông tin bên dưới</label>
                                <label className="label">Mã đơn hàng</label>
                                <input 
                                    className="field" type="text" placeholder="Ví dụ: FOOTBALLFAS_ABCDEF12G"
                                    onChange={(ev)=>{updateSearchCriteria(ev, "searched_order_id")}}
                                />
                                <label className="label">Email</label>
                                <input 
                                    className="field" type="email" placeholder="Ví dụ: abc@email.com"
                                    onChange={(ev)=>{updateSearchCriteria(ev, "searched_email")}}
                                />
                                <button type="submit">Xem đơn hàng</button>
                            </form>
                            {/* failed verify, show this if verify state is failed */}
                            {verify_status === "failed" && (
                                <div className="verify-announcement">
                                    Xin lỗi quý khách, mã đơn hàng hoặc địa chỉ email chưa chính xác.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* order detail, show this if verify state is successful */}
                {verify_status === "successful" && (
                    <div className="row manage-order-detail">
                        <div className="col">
                            <div className="content">
                                <div className="order-detail-title">
                                    Chi tiết đơn hàng của bạn
                                </div>
                                {Orders.map((order) => {
                                    return order.order_product.map((product) => {
                                        return <CheckoutProduct
                                            product={product} 
                                            key={product.product_id}
                                        />
                                    })
                                })}
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ManageOrder)