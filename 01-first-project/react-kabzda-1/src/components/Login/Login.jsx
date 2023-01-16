import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'

const Login = ({login, isAuth, captchaUrl}) => {
    const {register, handleSubmit, setError, clearErrors, formState: {errors}, reset} = useForm({mode: "all"});
    const onSubmit = data => {
        login(data.email, data.password, data.rememberMe, setError, data.captcha);
    }

    if (isAuth)
        return <Navigate to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <div className={s.acc_info}>
                <p>Для входа используйте тестовый аккаунт:</p>
                <p>Email: testaccforsocialnetwork@gmail.com</p>
                <p>Password: 1234554321</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={"Email"} onFocus={() => clearErrors()} {...register("email", {
                        required: true, pattern: {
                            value: /([a-z]|\d)+@[a-z]+\.[a-z]+/,
                            message: "Please, enter the valid email"
                        }
                    })}/>
                </div>
                {errors.email ? <div style={{color: 'red'}}>{errors.email.message}</div> : null}
                <div>
                    <input type={"password"} onFocus={() => clearErrors()}
                           placeholder={"Password"} {...register("password", {required: true, minLength: 8})}/>
                </div>
                {errors.password ? <div style={{color: 'red'}}>{errors.password.message}</div> : null}
                <div className={s.remember_me}>
                    <input type="checkbox" {...register("rememberMe")}/>
                    Remember me
                </div>
                {captchaUrl ? <img src={captchaUrl} alt=""/> : null}
                <div>
                    {captchaUrl ? <input type="text"
                                         placeholder="Enter captcha" {...register("captcha", {required: true})}/> : null}
                </div>
                <div>
                    <button>Login</button>
                </div>
                {errors.server ? <div style={{color: 'red'}}>{errors.server.message}</div> : null}
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);