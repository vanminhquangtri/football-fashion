import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
const Account = () => {
    const [state, setState] = useState({
        form_status: "login"
    });
    const {form_status} = state;
    // change form status
    const changeFormStatus = (ev, value) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                form_status: value
            }
        })
    };
    // change form status without ev params
    const changeFormStatusWithoutEV = (value) => {
        setState((prevState) => {
            return {
                ...prevState,
                form_status: value
            }
        })
    };
    return (
        <section className="account">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="wrap">
                            {/* login form */}
                            {
                                form_status === "login" && (
                                    <Login
                                        changeFormStatus={changeFormStatus}
                                    />
                                )
                            }
                            {/* register form */}
                            {
                                form_status === "register" && (
                                    <Register
                                        changeFormStatus={changeFormStatus}
                                        changeFormStatusWithoutEV={changeFormStatusWithoutEV}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;