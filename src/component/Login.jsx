
function Login(props) {

    // let [data, setLogin] = useState(props.dataLogin);



    function AddAccount() {
        let table = document.querySelector('table');
        let userNameSignup = document.querySelector('.usernamesignup')
        let passSignUp = document.querySelector('.passwordsignup')
        let repeatPass = document.querySelector('.repeatPass')
        let email = document.querySelector('.emailSignUp')
        let tbody = document.createElement('tbody');

        let character = passSignUp.value.split('');
        if (character.length >= 8) {
            if (passSignUp.value === repeatPass.value) {

                let count = 0;
                for (let i = 0; i < props.dataLogin.length; i++) {
                    if (props.dataLogin[i].username === userNameSignup.value) {
                        count++;
                        alert('Ten dang ki da ton tai')
                    }
                }
                if (count == 0) {

                    alert('Dang ky thanh cong')
                    props.dataLogin.push({ username: userNameSignup.value, password: passSignUp.value, email: email.value })
                    tbody.innerHTML = `
                    <tr>
                        <td>
                            ${userNameSignup.value}
                        </td>
            
                        <td>
                            ${passSignUp.value}
                        </td>
            
                        <td>
                            ${email.value}
                        </td>
                    </tr>
                `
                    table.append(tbody);
                }

            } else {
                alert('Mật khẩu chưa khớp nhau. Xin kiểm tra lại !')
            }
        } else {
            alert('Mật khẩu bạ nhập chưa đủ mạnh. Vui lòng dùng mật khẩu khác!')
        }





    }

    let login = document.querySelector('.login-wrap')
    function signIn() {
        let userName = document.querySelector('.username');
        let pass = document.querySelector('.password');
        for (let i = 0; i < props.dataLogin.length; i++) {
            if (userName.value === props.dataLogin[i].username && pass.value === props.dataLogin[i].password) {
                alert('Dang nhap thanh cong')
                login.setAttribute('style', 'display: none;')
                document.querySelector('.App').setAttribute('style', 'display: block;')
                document.querySelector('body').setAttribute('style', `background-image: url('https://rubyriverhotel.com.vn/wp-content/uploads/2021/12/1500-hinh-anh-nen-dep-Full-HD-4K-danh-cho-800x350.jpg')`);


            } else {
                alert('tai khoan khong ton tai');
            }

        }
    }
    return (

        <div className="container-login">

            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Sign
                        In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input username" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input password" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <button onClick={signIn} className="button">Sign in</button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>


                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label ">Username</label>
                                <input id="user" type="text" className="input usernamesignup" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input passwordsignup" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input repeatPass" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input emailSignUp" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button btn-signup" value="Sign Up" onClick={AddAccount} />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









        </div>
    )
}

export default Login