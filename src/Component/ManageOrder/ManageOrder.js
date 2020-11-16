// direct child of RouterURL
import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import OrderDetail from './OrderDetail';
const ManageOrder = (props) => {
    const {Orders} = props.Store;
    const [state, setState] = useState({
        verify_status: "",
        searched_order_id: "", // only need to passed id of the order
        searched_email: "", // only need to passed id of the order
        matched_order: {}
    });
    const {verify_status} = state;
    // update email and order id to state when filling form
    const updateSearchCriteria = (ev, criteria) => {
        const value = ev.target.value;
        let currentState = {...state};
        currentState[criteria] = value;
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
            // find the order that match ID
            const matchedOrder = Orders.find((order) => {
                return order.order_id === state.searched_order_id;
            });
            setState((prevState) => {
                return {
                    ...prevState,
                    verify_status: "successful",
                    matched_order: matchedOrder
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
    // reset all state to origin 
    const reseState = (value) => {
        setState((prevState) => {
            return {
                ...prevState,
                verify_status: "",
                searched_order_id: "",
                searched_email: "",
                matched_order: {}
            }
        })
    };
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    })
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
                {verify_status !== "successful" && (
                    <div className="row manage-order-verify">
                        <div className="col">
                            <div className="content">
                                <form 
                                    className="form-verify-order"
                                    onSubmit={(ev)=>{findOrder(ev)}}
                                    noValidate
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
                                    <div className="verify-announcement animate__animated animate__fadeInLeft">
                                        Xin lỗi Quý khách, mã đơn hàng hoặc địa chỉ email chưa chính xác. Vui lòng thử lại.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {/* order detail, show this if verify state is successful */}
                {verify_status === "successful" && (
                    <div className="row manage-order-detail animate__animated animate__fadeInRight">
                        <div className="col">
                            <div className="content">
                                {
                                    state.matched_order !== undefined && (
                                        <OrderDetail
                                        matchedOrder={state.matched_order}
                                        reseState={reseState}
                                    />
                                    )
                                }
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