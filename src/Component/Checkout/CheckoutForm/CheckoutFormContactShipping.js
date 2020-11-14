import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
const CheckoutFormContactShipping = (props) => {
    const [state, setState] = useState({
        form_type: "contact-shipping" // also: billing, payment, success
    })
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    useEffect(() => {
        const fields = document.querySelectorAll(".field-wrapper .field");
        
        for (let i = 0; i < fields.length; i ++) {
            const fieldTopUp = fields[i].parentNode.querySelector(".field-top-up");
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
            <form className="form form-contact-shipping">
                <span className="title">Thông tin liên hệ</span>
                <span className="field-wrapper">
                    <input className="field" type="text" placeholder="Họ"></input>
                    <span className="field-top-up">Họ</span>
                </span>
                <span className="field-wrapper">
                    <input className="field" type="text" placeholder="Họ"/>
                    <span className="field-top-up">Tên đệm và tên</span>
                </span>
            </form>
            
        </div>
    );
};

export default CheckoutFormContactShipping;