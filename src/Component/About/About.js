// direct child of routerURL
import React, {useState, useEffect} from 'react';
import {Parallax} from 'react-parallax';
import paraImg1 from "../../Assets/images/section-about/parra1.jpg"
import {useForm} from "react-hook-form";
const About = () => {
    const [state, setState] = useState({
        submit_status: "failed"
    });
    // change submit_status
    const changeSubmitStatus = () => {
        setState((prevState) => {
            return {
                ...prevState,
                submit_status: "successful"
            }
        })
    }
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {
        changeSubmitStatus()
    };
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, [])
    return (
        <section className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="parrallax-container">
                            <Parallax 
                                bgImage={paraImg1} 
                                bgImageAlt="the cat"
                                strength={400}
                                blur={0}
                            >
                                <div className="parrallax-content">
                                    <h5 className="title">Gửi phản hồi cho chúng tôi</h5>
                                    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                        <label>Tên </label>
                                        <input ref={register({required: true})} className="field"  type="text" name="name"/>
                                        <span className="error-message">
                                            {errors.name && "Vui lòng nhập tên"}
                                        </span>
                                        <label>Điện thoại </label>
                                        <input ref={register({required: true})} className="field"  type="tel" name="phone"/>
                                        <span className="error-message">
                                            {errors.phone && "Vui lòng nhập số điện thoại"}
                                        </span>
                                        <label>Email </label>
                                        <input 
                                            ref={register({pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} 
                                            className="field" type="email" name="email"
                                        />
                                        <span className="error-message">
                                            {errors.email && "Vui lòng nhập đúng định dạng email"}
                                        </span>
                                        <label>Vui lòng nhập nội dung chi tiết </label>
                                        <textarea ref={register({required: true})} className="field" name="comment" row={10}></textarea>
                                        <span className="error-message">
                                            {errors.comment && "Vui lòng nhập nội dung chi tiết"}
                                        </span>
                                        <input className="field" type="submit" value="Gửi phản hồi"/>
                                    </form>
                                    {state.submit_status === "successful" && (
                                        <div className="successful-submit-announcement animate__animated animate__fadeInUp">
                                            Cảm ơn Quý khách đã gửi phản hồi đến chúng tôi
                                        </div>
                                    )}
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;