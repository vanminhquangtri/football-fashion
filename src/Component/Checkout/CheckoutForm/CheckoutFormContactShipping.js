import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
const CheckoutFormContactShipping = (props) => {
    const {changeFormType} = props;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, ev) => {
        console.log(data);
        changeFormType(ev, "payment")
    };
    useEffect(() => {
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
            >
                {/* contact information: name, phone, email */}
                <span className="title">Thông tin liên hệ</span>
                <span className="field-wrapper">
                    <input ref={register({required: true})} name="last_name" className="field" type="text" placeholder="Họ *"></input>
                    <span className="field-top-up">Họ *</span>
                </span>
                <span className="error-message">
                    {errors.last_name && "Vui lòng nhập tên"}
                </span>
                <span className="field-wrapper">
                    <input ref={register({required: true})} name="first_name" className="field" type="text" placeholder="Tên đệm và tên *"/>
                    <span className="field-top-up">Tên đệm và tên *</span>
                </span>
                <span className="error-message">
                    {errors.first_name && "Vui lòng nhập Tên đệm và tên"}
                </span>
                <span className="field-wrapper">
                    <input ref={register({pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} name="email" className="field" type="email" placeholder="Email"/>
                    <span className="field-top-up">Email</span>
                </span>
                <span className="error-message">
                    {errors.email && "Vui lòng nhập đúng định dạng email"}
                </span>
                <span className="field-wrapper">
                    <input ref={register({required: true})} name="tel" className="field" type="tel" placeholder="Điện thoại *"/>
                    <span className="field-top-up">Điện thoại *</span>
                </span>
                <span className="error-message">
                    {errors.tel && "Vui lòng nhập số điện thoại"}
                </span>
                {/* shipping address */}
                <span className="title">Địa chỉ nhận hàng</span>
                <span className="field-wrapper">
                    <input name="city" className="field" type="text" placeholder="Tỉnh / thành phố *"></input>
                    <span className="field-top-up">Tỉnh / thành phố *</span>
                </span>
                <span className="field-wrapper">
                    <input name="district" className="field" type="text" placeholder="Quận / huyện *"></input>
                    <span className="field-top-up">Quận / huyện *</span>
                </span>
                <span className="field-wrapper">
                    <input name="ward" className="field" type="text" placeholder="Xã / phường/ thị trấn *"/>
                    <span className="field-top-up">Xã / phường/ thị trấn *</span>
                </span>
                <span className="field-wrapper">
                    <input name="street" className="field" type="text" placeholder="Tên đường *"/>
                    <span className="field-top-up">Tên đường *</span>
                </span>
                <span className="field-wrapper">
                    <input name="house_no" className="field" type="text" placeholder="Số nhà"/>
                    <span className="field-top-up">Số nhà</span>
                </span>
                <input type="submit" value="Thanh toán"/>
            </form>
        </div>
    );
};

export default CheckoutFormContactShipping;