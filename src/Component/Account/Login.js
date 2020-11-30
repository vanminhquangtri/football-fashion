import React from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import AxiosAccount from '../GeneralModules/AxiosAccount';
const Login = (props) => {
    const {changeFormStatus} = props;
    let history = useHistory();
    const successLoginNavigate = () => {
        history.push('/');
    }
    // validate form
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {
        const data = {
            email: document.getElementById("login_email").value,
            password: document.getElementById("login_password").value
        }
        // loginAccount()
        AxiosAccount("login", "post", "https://api.findids.net/api/auth/login", data, successLoginNavigate)
    };    
    return (
        <form 
            className="form login-form" 
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form-field">
                <label className="form-title">ĐĂNG NHẬP</label>
            </div>
            <div className="form-field">
                <label>Địa chỉ Email</label>
                <input 
                    type="email" name="login_email" id="login_email"
                    ref={register({required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                />
                {errors.login_email && <span className="error-message">Vui lòng nhập đúng định dạng email</span>}
            </div>
            <div className="form-field">
                <label>Mật khẩu</label>
                <input 
                    type="password" name="login_password" id="login_password"
                    ref={register({required: true, minLength: 6})}
                />
                {errors.login_password && <span className="error-message">Mật khẩu ít nhất 6 ký tự</span>}
            </div>
            <div className="form-field">
                <input type="submit" value="Đăng nhập" className="btn btn-success"/>
            </div>
            <div className="form-field">
                <button className="btn btn-primary" onClick={(ev)=>{changeFormStatus(ev, "register")}}>Chưa có tài khoản, đăng ký</button>
            </div>
            {/* show message if login failed */}
            <div className="failed-login-announcement announcement">
                
            </div>
        </form>
    );
};

export default Login;