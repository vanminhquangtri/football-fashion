import React from 'react';
import {useHistory} from "react-router-dom";
const loginAPI = "https://api.findids.net/api/auth/login";
const Login = (props) => {
    const {changeFormStatus} = props;
    let history = useHistory();
    const successLoginNavigate = () => {
        history.push('/');
    }
    // login handler
    const loginAccount = (ev) => {
        ev.preventDefault();
        const loginEmail = document.getElementById("login_email").value;
        const loginPassword = document.getElementById("login_password").value; 
        const xhr = new XMLHttpRequest();
        xhr.open('post', loginAPI);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`email=${loginEmail}&password=${loginPassword}`);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const accountName = document.querySelector(".account-name");
                accountName.innerHTML = response.data.name
                successLoginNavigate()
            };
            if (xhr.readyState === 4 && xhr.status !== 200) {
                const failedLogin = document.querySelector(".failed-login-announcement");
                failedLogin.innerHTML = "Sai email hoặc mật khẩu"
            };
        };
    }
    return (
        <form 
            className="login-form" 
            onSubmit={(ev)=>{loginAccount(ev)}}
        >
            <div className="form-field">
                <label className="form-title">ĐĂNG NHẬP</label>
            </div>
            <div className="form-field">
                <label>Địa chỉ Email</label>
                <input type="email" name="login_email" id="login_email" required/>
            </div>
            <div className="form-field">
                <label>Mật khẩu</label>
                <input type="password" name="login_password" id="login_password" required/>
            </div>
            <div className="form-field">
                <input type="submit" value="Đăng nhập" className="btn btn-success"/>
            </div>
            <div className="form-field">
                <button className="btn btn-primary" onClick={(ev)=>{changeFormStatus(ev, "register")}}>Chưa có tài khoản, đăng ký</button>
            </div>
            {/* show message if login failed */}
            <div className="failed-login-announcement">
                
            </div>
        </form>
    );
};

export default Login;