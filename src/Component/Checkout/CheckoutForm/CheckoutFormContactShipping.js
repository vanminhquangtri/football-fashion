import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
const CheckoutFormContactShipping = (props) => {
    const {changeFormType, updateOrderInfo} = props;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, ev) => {
        changeFormType(ev, "payment")
    };
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
    return (
        <div className="form-contact-shipping-wrapper">
            <form 
                className="form form-contact-shipping"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                {/* contact information: name, phone, email */}
                <span className="title">Thông tin liên hệ</span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="last_name" className="field" type="text" placeholder="Họ *" 
                        onChange={(ev)=>updateOrderInfo(ev, "last_name")}
                    />
                    <span className="field-top-up">Họ *</span>
                </span>
                <span className="error-message">
                    {errors.last_name && "Vui lòng nhập Họ"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="first_name" className="field" type="text" placeholder="Tên đệm và tên *" 
                        onChange={(ev)=>updateOrderInfo(ev, "first_name")}
                    />
                    <span className="field-top-up">Tên đệm và tên *</span>
                </span>
                <span className="error-message">
                    {errors.first_name && "Vui lòng nhập Tên đệm và tên"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} 
                        name="email" className="field" type="email" placeholder="Email" 
                        onChange={(ev)=>updateOrderInfo(ev, "email")}
                    />
                    <span className="field-top-up">Email</span>
                </span>
                <span className="error-message">
                    {errors.email && "Vui lòng nhập đúng định dạng email"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="tel" className="field" type="tel" placeholder="Điện thoại *" 
                        onChange={(ev)=>updateOrderInfo(ev, "tel")}
                    />
                    <span className="field-top-up">Điện thoại *</span>
                </span>
                <span className="error-message">
                    {errors.tel && "Vui lòng nhập số điện thoại"}
                </span>
                {/* shipping address */}
                <span className="title">Địa chỉ nhận hàng</span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="city" className="field" type="text" placeholder="Tỉnh / thành phố *" 
                        onChange={(ev)=>updateOrderInfo(ev, "city")}
                    />
                    <span className="field-top-up">Tỉnh / thành phố *</span>
                </span>
                <span className="error-message">
                    {errors.city && "Vui lòng nhập Tỉnh / thành phố"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="district" className="field" type="text" placeholder="Quận / huyện *" 
                        onChange={(ev)=>updateOrderInfo(ev, "district")}
                    />
                    <span className="field-top-up">Quận / huyện *</span>
                </span>
                <span className="error-message">
                    {errors.district && "Vui lòng nhập Quận / huyện"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="ward" className="field" type="text" placeholder="Xã / phường/ thị trấn *" 
                        onChange={(ev)=>updateOrderInfo(ev, "ward")}
                    />
                    <span className="field-top-up">Xã / phường/ thị trấn *</span>
                </span>
                <span className="error-message">
                    {errors.ward && "Vui lòng nhập Xã / phường/ thị trấn"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="street" className="field" type="text" placeholder="Tên đường *" 
                        onChange={(ev)=>updateOrderInfo(ev, "street")}
                    />
                    <span className="field-top-up">Tên đường *</span>
                </span>
                <span className="error-message">
                    {errors.street && "Vui lòng nhập Tên đường"}
                </span>
                <span className="field-wrapper">
                    <input 
                        ref={register({required: true})} 
                        name="house_no" className="field" type="text" placeholder="Số nhà *" 
                        onChange={(ev)=>updateOrderInfo(ev, "house_no")}
                    />
                    <span className="field-top-up">Số nhà *</span>
                </span>
                <span className="error-message">
                    {errors.house_no && "Vui lòng nhập Số nhà"}
                </span>
                <input type="submit" value="Thanh toán"/>
            </form>
        </div>
    );
};

export default CheckoutFormContactShipping;