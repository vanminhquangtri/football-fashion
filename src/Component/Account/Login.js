import React from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
const loginAPI = "https://api.findids.net/api/auth/login";
const Login = (props) => {
    const {changeFormStatus} = props;
    let history = useHistory();
    const successLoginNavigate = () => {
        history.push('/');
    }
    // login handler
    const loginAccount = () => {
        const loginEmail = document.getElementById("login_email").value;
        const loginPassword = document.getElementById("login_password").value; 
        const xhr = new XMLHttpRequest();
        xhr.open('post', loginAPI);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`email=${loginEmail}&password=${loginPassword}`);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const showAccountName = document.querySelector(".account-name");
                const accountName = response.data.name.split(" ");
                showAccountName.innerHTML = accountName[accountName.length - 1];
                window.localStorage.setItem("login_token", response.token);
                successLoginNavigate();
            };
            if (xhr.readyState === 4 && xhr.status !== 200) {
                const response = JSON.parse(xhr.responseText);
                const failedLogin = document.querySelector(".failed-login-announcement");
                failedLogin.innerHTML = response.message
            };
        };
    };
    // validate form
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {
        loginAccount()
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