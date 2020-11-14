import React, {useState, useEffect} from 'react';
import CheckoutFormContactShipping from './CheckoutFormContactShipping';
const CheckoutForm = (props) => {
    const [state, setState] = useState({
        form_type: "contact_shipping" // also: payment, success
    });
    const {form_type} = state;
    const changeFormType = (ev, type) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                form_type: type
            }
        })
    };
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0)
    })
    return (
        <div className="row check-out-form">
            <div className="col">
                <div className="content">
                    {form_type === "contact_shipping" && (
                        <CheckoutFormContactShipping changeFormType={changeFormType}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;