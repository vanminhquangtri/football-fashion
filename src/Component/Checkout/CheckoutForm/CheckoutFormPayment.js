import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import paymentCard from "../../../Assets/images/section-shopping-cart-detail/payment-card.png";
// generate random ID for order (based on source from: github)
var ID = function () {
    return 'FOOTBALLFAS_' + (Math.random().toString(36).substr(2, 9)).toUpperCase();
};
const CheckoutFormPayment = (props) => {
    const {changeFormType, updateOrderInfo, updateOrderID} = props;
    const [state, setState] = useState({
        payment_method: "payment_online"
    });
    const {payment_method} = state;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, ev) => {
        changeFormType(ev, "success");
    };
    // change payment_method 
    const changePaymentMethod = (ev) => {
        const value = ev.target.value;
        setState((prevState) => {
            return {
                ...prevState,
                payment_method: value
            }
        })
    }
    useEffect(() => {
        // toggle to placeholder
        const fields = document.querySelectorAll(".field-wrapper .field");
        for (let i = 0; i < fields.length; i ++) {
            fields[i].addEventListener("keyup", (ev) => {
                const fieldTopUp = fields[i].parentNode.querySelector(".field-top-up");
                if (fieldTopUp !== undefined) {
                    if (fields[i].value !== "") {
                        fields[i].style.height = "60%";
                        fieldTopUp.style.display = "block";
                    } else {
                        fields[i].style.height = "100%";
                        fieldTopUp.style.display = "none";
                    }
                }
            })
        }
    })
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
        // add slash to expired date
        const expiredDate = document.querySelector(".expired_date");
        expiredDate.addEventListener("keyup", (ev) => {
            let value = expiredDate.value;
            if (ev.key !== "Backspace"){
                if (value.length === 2) {
                    expiredDate.value = `${value} / `
                }
            }
        })
    },[])
    return (
        <div className="form-payment-wrapper">
            {/* choose pay online of pay on spot */}
            <form className="form-payment-method">
                <label className="title">Chọn hình thức thanh toán</label>
                <label>
                    <input 
                        type="radio" name="payment_method" id="payment_online" value="payment_online"
                        onInput={(ev)=>{changePaymentMethod(ev); updateOrderInfo(ev, "payment_method")}}
                    />
                    <label htmlFor="payment_online">Thanh toán online</label>
                </label>
                <label>
                    <input 
                        type="radio" name="payment_method" id="payment_onspot" value="payment_onspot"
                        onInput={(ev)=>{changePaymentMethod(ev); updateOrderInfo(ev,"payment_method")}}
                    />
                    <label htmlFor="payment_onspot">Thanh toán tiền mặt khi nhận hàng</label>
                </label>
            </form>
            {payment_method === "payment_online" && (
                <>
                    <img alt="payment card" src={paymentCard} className="payment-card animate__animated animate__fadeInRight"/>
                    {/* form if pay online */}
                    <form 
                        className="form form-payment animate__animated animate__fadeInRight"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        id="form-payment"
                    >
                        {/* card owner */}
                        <span className="field-wrapper">
                            <input
                                style={{textTransform: "uppercase"}}
                                ref={register({required: true, pattern: /^[A-Za-z ]+$/})} 
                                name="card_owner" className="field" type="text" placeholder="Tên chủ thẻ *" 
                            />
                            <span className="field-top-up">Tên chủ thẻ *</span>
                        </span>
                        <span className="error-message">
                            {errors.card_owner && "Vui lòng nhập tiếng Việt không dấu"}
                        </span>
                        {/* card number */}
                        <span className="field-wrapper">
                            <input 
                                ref={register({required: true, maxLength: 16, minLength: 16})} 
                                name="card_number" className="field" type="number" placeholder="Số thẻ *" 
                            />
                            <span className="field-top-up">Số thẻ gồm 16 chữ số *</span>
                        </span>
                        <span className="error-message">
                            {errors.card_number && "Số thẻ bao gồm 16 chữ số"}
                        </span>
                        {/* expired_date */}
                        <span className="field-wrapper">
                            <input
                                ref={register({required: true, pattern: /^[0-9/ ]+$/, maxLength: 7, minLength: 7})} 
                                name="expired_date" className="field expired_date" type="text" placeholder="Ngày hết hạn (MM / YY) *" 
                            />
                            <span className="field-top-up">Ngày hết hạn (MM / YY) *</span>
                        </span>
                        <span className="error-message">
                            {errors.expired_date && "Vui lòng nhập đúng 4 chữ số"}
                        </span>
                        {/* cvv_code */}
                        <span className="field-wrapper">
                            <input 
                                ref={register({required: true, maxLength: 3, minLength: 3})} 
                                name="cvv_code" className="field" type="password" placeholder="Mã CVV *" 
                            />
                            <span className="field-top-up">Mã CVV *</span>
                        </span>
                        <span className="error-message">
                            {errors.expired_year && "Vui lòng nhập 3 chữ số in phía sau thẻ"}
                        </span>
                        {/* confirm agree conditions */}
                        <label className="condition-agreement">
                            <input 
                                ref={register({required: true})}
                                type="checkbox" name="condition_agreement" id="condition_agreement" value="agreed"
                            />
                            <label htmlFor="condition_agreement">Bạn đồng ý với điều khoản của chúng tôi</label>
                        </label>
                        <span className="error-message">
                            {errors.condition_agreement && "Vui lòng nhập chọn ô này để tiếp tục"}
                        </span>
                    </form>
                    {/* navigate button for payment online*/}
                    <div className="form-navigate navigate-pay-online">
                        <button type="button" onClick={(ev)=>{changeFormType(ev, "contact_shipping")}}>Quay về trang thông tin</button>
                        <button type="submit" form="form-payment">Xác nhận đơn hàng</button>
                    </div>
                </>
            )}
            {/* navigate button for payment onspot*/}
            {payment_method === "payment_onspot" && (
                <div className="form-navigate navigate-pay-onspot">
                    <button type="button" onClick={(ev)=>{changeFormType(ev, "contact_shipping")}}>Quay về trang thông tin</button>
                    <button type="button" onClick={(ev)=>{updateOrderID(ID()); changeFormType(ev, "success")}}>Xác nhận đơn hàng</button>
                </div>
            )}
        </div>
    );
};

export default CheckoutFormPayment;