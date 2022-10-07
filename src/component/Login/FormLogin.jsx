import React, { useRef } from 'react'
import { useState } from 'react';
import './FormLogin.css'
import { message } from "antd";
import { getAPI, postAPI } from '../config/api';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from '../../redux/UserReducer';

function FormLogin() {
    const [isActive, setIsActive] = useState(false);
    const nav = useNavigate();
    const dispatch = useDispatch()
    let refConfirm = useRef();
    let refEmail = useRef();
    let refPass = useRef();
    // sign in
    let emailSignIn = useRef();
    let passSignIn = useRef();
    function addMode() {
        setIsActive(true)
    }

    function removeMode() {
        setIsActive(false);
    }

    const signUp = async () => {
        let values = { email: refEmail.current.value, password: refPass.current.value, confim: refConfirm.current.value }
        try {
            const mailFormat =
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (values.password !== values.confim) {
                message.error("Mật khẩu không khớp nhau !");
            } else if (!mailFormat.test(values.email)) {
                message.error("Email không hợp lệ !");
            } else if (values.password.length < 6) {
                message.error("Mật khẩu ít nhất phải 6 ký tự !");
            } else {
                const email = refEmail.current.value;
                const username = email.slice(0, email.indexOf("@"));
                const password = refPass.current.value;
                let res = await postAPI("/auth/sign-up", { email, password, username });
                message.success("Tạo tài khoản thành công!");
                refEmail.current.value = '';
                refPass.current.value = '';
                refConfirm.current.value = '';
                setTimeout(() => {
                    window.location.reload();
                }, 1500)
            }
        } catch (error) {
            console.log(43, error);
            message.error(error.response.data.message);
        }
    }
    //Sign in 


    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


    const signIn = async () => {
        let valueSignIn = { email: emailSignIn.current.value, password: passSignIn.current.value }
        console.log(74, valueSignIn);
        try {
            let res = await postAPI("/auth/sign-in", valueSignIn);
            setCookie("signInManh", res.data.token, 30);
            const resp = await getAPI("/auth/get-loged-in-user");
            // console.log(78, resp.data);
            const action = userLogin(resp.data.user);
            dispatch(action);
            // console.log(action);
            nav("/");
        } catch (error) {
            console.log(83, error);
            alert(error.response.data.message);
        }
    };

    return (
        <div className={`containerLogin ${isActive ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input ref={emailSignIn} type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input ref={passSignIn} type="password" placeholder="Password" />
                        </div>
                        <button className="btn solid" onClick={signIn}>Sign In</button>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-facebook-f"></i></a>
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-twitter"></i></a>
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-google"></i></a>
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </form>

                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input ref={refEmail} type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input ref={refPass} type="password" placeholder="Password" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input ref={refConfirm} type="password" placeholder="Confirm Password" />
                        </div>
                        <button className="btn" onClick={signUp}>Sign up</button>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-facebook-f"></i></a>
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-twitter"></i></a>
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-google"></i></a>
                            <a href="" className="social-icon">
                                <i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" onClick={addMode} id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" onClick={removeMode} id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FormLogin