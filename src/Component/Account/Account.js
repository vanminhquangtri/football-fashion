import React, {useState} from 'react';
import Login from './Login';
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
                                    <form className="login-form">
                                        <div className="form-field">
                                            <label className="form-title">Đăng ký</label>
                                        </div>
                                        <div className="form-field">
                                            <label>Tên</label>
                                            <input type="text" name="register_name" id="register_name"/>
                                        </div>
                                        <div className="form-field">
                                            <label>Địa chỉ Email</label>
                                            <input type="email" name="register_email" id="register_email"/>
                                        </div>
                                        <div className="form-field">
                                            <label>Mật khẩu</label>
                                            <input type="password" name="register_password" id="register_password"/>
                                        </div>
                                        <div className="form-field">
                                            <input type="submit" value="Đăng ký"/>
                                            <div className="form-field">
                                                <button onClick={(ev)=>{changeFormStatus(ev, "login")}}>Đã có tài khoản, đăng nhập</button>
                                            </div>
                                        </div>
                                    </form>
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