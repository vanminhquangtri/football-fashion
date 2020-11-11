// direct child of ProductDetail, contain other infos of products: description, shipping, payment, refund
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";

const ProductOtherInfo = (props) => {
    const {product} = props;
    const [state, setState] = useState({
        des: true,
        shipping: false,
        payment: false,
        refund: false
    })
    const {des, shipping, payment, refund} = state;
    const changeAccordionStt = (stateName) => {
        const currentState = {...state};
        currentState[stateName] = !state[stateName];
        setState(() => {
            return currentState
        })
    }
    return (
        <div className="container-fluid product-other-info">
            <div className="row">
                <div className="col">
                    <div className="wrap">
                        {/* description */}
                        <div className="info-type des">
                            <div className="info-title">
                                <div className="title">Mô tả sản phẩm</div>
                                <div className="accordion-btn" onClick={()=>{changeAccordionStt("des")}}>
                                    {des && (<FontAwesomeIcon icon={faMinus} className="animate__animated animate__rotateIn"/>)}
                                    {des === false && (<FontAwesomeIcon icon={faPlus}  className="animate__animated animate__rotateIn"/>)}
                                </div>
                            </div>
                            {des && (
                                <div className="info-detail">
                                    {product.des}
                                </div>
                            )}
                        </div>
                        <div className="info-type shipping">
                            <div className="info-title">
                                <div className="title">Giao nhận</div>
                                <div className="accordion-btn" onClick={()=>{changeAccordionStt("shipping")}}>
                                    {shipping && (<FontAwesomeIcon icon={faMinus} className="animate__animated animate__rotateIn"/>)}
                                    {shipping === false && (<FontAwesomeIcon icon={faPlus}  className="animate__animated animate__rotateIn"/>)}
                                </div>
                            </div>
                            {shipping && (
                                <div className="info-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam.
                                </div>
                            )}
                        </div>
                        <div className="info-type payment">
                            <div className="info-title">
                                <div className="title">Thanh toán</div>
                                <div className="accordion-btn" onClick={()=>{changeAccordionStt("payment")}}>
                                    {payment && (<FontAwesomeIcon icon={faMinus} className="animate__animated animate__rotateIn"/>)}
                                    {payment === false && (<FontAwesomeIcon icon={faPlus}  className="animate__animated animate__rotateIn"/>)}
                                </div>
                            </div>
                            {payment && (
                                <div className="info-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam.
                                </div>
                            )}
                        </div>
                        <div className="info-type refund">
                            <div className="info-title">
                                <div className="title">Hoàn tiền</div>
                                <div className="accordion-btn" onClick={()=>{changeAccordionStt("refund")}}>
                                    {refund && (<FontAwesomeIcon icon={faMinus} className="animate__animated animate__rotateIn"/>)}
                                    {refund === false && (<FontAwesomeIcon icon={faPlus}  className="animate__animated animate__rotateIn"/>)}
                                </div>
                            </div>
                            {refund && (
                                <div className="info-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam.
                                </div>
                            )}
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
export default connect(mapStateToProps)(ProductOtherInfo)