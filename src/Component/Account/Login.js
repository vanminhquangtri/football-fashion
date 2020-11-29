import React from 'react';
const loginAPI = "https://api.findids.net/api/auth/login";
const Login = (props) => {
    const {changeFormStatus} = props;
    // login handler
    const loginAccount = (ev) => {
        ev.preventDefault();
        console.log("please wait");
        const loginEmail = document.getElementById("login_email").value;
        const loginPassword = document.getElementById("login_password").value; 
        const xhr = new XMLHttpRequest();
        xhr.open('post', loginAPI);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`email=${loginEmail}&password=${loginPassword}`);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // if login success
                // 1, redirect to home page
                // 2, show account name on top nav
                console.log(JSON.parse(xhr.responseText).message);
            };
            if (xhr.readyState === 4 && xhr.status === 400) {
                // if login failed
                // 1, change state to failed
                console.log(JSON.parse(xhr.responseText).message);
            };
        };
    }
    return (
        <form 
            className="login-form" 
            onSubmit={(ev)=>{loginAccount(ev)}}
        >
            <div className="form-field">
                <label className="form-title">Đăng nhập</label>
            </div>
            <div className="form-field">
                <label>Địa chỉ Email</label>
                <input type="email" name="login_email" id="login_email"/>
            </div>
            <div className="form-field">
                <label>Mật khẩu</label>
                <input type="password" name="login_password" id="login_password"/>
            </div>
            <div className="form-field">
                <input type="submit" value="Đăng nhập"/>
            </div>
            <div className="form-field">
                <button onClick={(ev)=>{changeFormStatus(ev, "register")}}>Chưa có tài khoản, đăng ký</button>
            </div>
        </form>
    );
};

export default Login;