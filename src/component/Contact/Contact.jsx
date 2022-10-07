import React from 'react'
import { useState } from 'react'
import './Contact.css'
import { Button, message, Space } from 'antd';
import { useEffect } from 'react';
import { useRef } from 'react';

function Contact() {

    const [email, setEmail] = useState("");
    let refName = useRef();
    let refMessage = useRef()
    // const [message, setMessage] = useState("")
    // Toast Message
    const error = () => {
        message.error("Email is not valid !");
    };

    const success = () => {
        message.success('Email is valid ! Send message successful !');
    };

    const warning = () => {
        message.warning('You must fill the field name,message!');
    };

    function onChange(e) {
        setEmail(e.target.value);
    }

    function emailValidation() {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return !(!email || regex.test(email) === false);
    }

    const onSubmit = () => {
        const isEmailValid = emailValidation();
        if (!refName.current.value || !refMessage.current.value) {
            warning();
        } else {
            { isEmailValid ? success() : error() }
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-form">
                <div className="contact-left">
                    <div className="contact-img">
                        <img src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/131423877_833189927515787_1127544088045126739_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=74eZjHmvhR8AX82TWvl&_nc_ht=scontent.fhan2-5.fna&oh=00_AT9YyEl_PWY9OJARVKsunZaJ-dYrZtXGQq2zozmlqFmdpQ&oe=63628A73" alt="" />
                    </div>
                </div>

                <div className="contact-right">
                    <div className="form-title">
                        <h3>Contact me</h3>
                    </div>
                    <div className="form">
                        <div className='form-submit'>
                            <div className="input-form-name u-form-item">
                                <label for="name"> <strong>Name:</strong> </label>
                                <input type="text" ref={refName} placeholder='Enter your name' id='name' className='input-name u-border-2' required />
                            </div>

                            <div className="input-form-email u-form-item">
                                <label for="email"><strong>Email:</strong></label>
                                <input type="text" placeholder='Enter your email' id='email' className='input-email u-border-2' value={email} onChange={onChange} required />
                            </div>

                            <div className="input-form-message u-form-item">
                                <label for="message"><strong>Message:</strong></label>
                                <textarea ref={refMessage} placeholder='Enter your message' id='message' className='input-message u-border-2' required></textarea>
                            </div>

                            <div className="input-form-accept u-form-item">
                                <input type="checkbox" placeholder='Enter your accept' id='accept' className='input-accept' required />
                                <label for="accept">I accept the Terms of Service</label>
                            </div>

                            <div className="input-form-submit u-form-item">
                                <button onClick={onSubmit} className='btn-submit'>Submit</button>
                                <input type="submit" value='submit' style={{ display: 'none' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-location">
                <div className="contact-item-container">
                    <div className="contact-item">
                        <div className="item-address">
                            <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                            <h3>Address</h3>
                            <h4>Ngõ 97,Triều Khúc,Thanh Trì,Hà Nội</h4>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="item-address">
                            <div className="icon"><i className="fa-solid fa-phone"></i></div>
                            <h3>Phone</h3>
                            <h4>0332774093</h4>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="item-address">
                            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                            <h3>Email</h3>
                            <h4>lemanhabc7@gmail.com</h4>
                        </div>
                    </div>

                    <div className="contact-item contact-item-infor">
                        <div className="item-address">
                            <h3>Follow me</h3>
                            <div className="icon icon-infor">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy-right">
                    <div>Made by Le Manh Dev</div>
                </div>
            </div>

        </div>
    )
}

export default Contact