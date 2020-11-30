import React from 'react';
import {useForm} from "react-hook-form";
const registerAPI = "https://api.findids.net/api/auth/register"
const Register = props => {
    const {changeFormStatus, changeFormStatusWithoutEV} = props;
    // login handler
    const registerAccount = () => {
        const registerName = document.getElementById("register_name").value;
        const registerEmail = document.getElementById("register_email").value;
        const registerPassword = document.getElementById("register_password").value; 
        const xhr = new XMLHttpRequest();
        xhr.open('post', registerAPI);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`name=${registerName}&email=${registerEmail}&password=${registerPassword}`);
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText);
                const registerAnnoucement = document.querySelector(".register-announcement");
                if (xhr.status === 200) {
                    registerAnnoucement.innerHTML = response.message;
                    changeFormStatusWithoutEV("login");
                } else {
                    const errors = response.error;
                    for (let error in errors) {
                        const errorsArray = errors[error];
                        for (let i = 0; i < errorsArray.length; i++) {
                            registerAnnoucement.innerHTML += `${errorsArray[i]} <br/>`
                        }                      
                    }
                }
            };
        };
    };
    // validate form
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (ev) => {
        registerAccount();
    };
    return (
        <form 
            className="form register-form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form-field">
                <label className="form-title">ĐĂNG KÝ</label>
            </div>
            <div className="form-field">
                <label>Tên</label>
                <input 
                    type="text" name="register_name" id="register_name"
                    ref={register({required: true})}
                />
                {errors.register_name && <span className="error-message">Vui lòng nhập tên</span>}
            </div>
            <div className="form-field">
                <label>Địa chỉ Email</label>
                <input 
                    type="email" name="register_email" id="register_email"
                    ref={register({required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                />
                {errors.register_email && <span className="error-message">Vui lòng nhập đúng định dạng email</span>}
            </div>
            <div className="form-field">
                <label>Mật khẩu</label>
                <input 
                    type="password" name="register_password" id="register_password"
                    ref={register({required: true, minLength: 6})}
                />
                {errors.register_password && <span className="error-message">Mật khẩu ít nhất 6 ký tự</span>}
            </div>
            <div className="form-field">
                <input type="submit" value="Đăng ký" className="btn btn-success"/>
            </div>
            <div className="form-field">
                <button className="btn btn-primary" onClick={(ev)=>{changeFormStatus(ev, "login")}}>Đã có tài khoản, đăng nhập</button>
            </div>
            {/* show register result */}
            <div className="register-announcement announcement">
                
            </div>
        </form>
    )
};

export default Register
