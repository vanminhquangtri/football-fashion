import React, {useState, useEffect} from 'react';
import CheckoutFormContactShipping from './CheckoutFormContactShipping';
import CheckoutFormPayment from './CheckoutFormPayment';
import CheckoutSuccess from './CheckoutSuccess';

const CheckoutForm = (props) => {
    const [state, setState] = useState({
        form_type: "contact_shipping" // also: payment, success
    });
    const {form_type} = state;
    const {updateOrderInfo, orderInfo, updateOrderID} = props;
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
    },[state.form_type])
    return (
        <div className="row check-out-form">
            <div className="col">
                <div className="content">
                    {form_type === "contact_shipping" && (
                        <CheckoutFormContactShipping 
                            changeFormType={changeFormType}
                            updateOrderInfo={updateOrderInfo}
                            orderInfo={orderInfo}
                        />
                    )}
                    {form_type === "payment" && (
                        <CheckoutFormPayment 
                            changeFormType={changeFormType}
                            updateOrderInfo={updateOrderInfo}
                            updateOrderID={updateOrderID}
                        />
                    )}
                    {form_type === "success" && (
                        <CheckoutSuccess 
                            orderInfo={orderInfo}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;