import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import CheckoutFormContactShipping from './CheckoutFormContactShipping';
const CheckoutForm = (props) => {
    const [state, setState] = useState({
        form_type: "contact_shipping" // also: billing, payment, success
    });
    const {form_type} = state;
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div className="row check-out-form">
            <div className="col">
                <div className="content">
                    {form_type === "contact_shipping" && (
                        <CheckoutFormContactShipping/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;