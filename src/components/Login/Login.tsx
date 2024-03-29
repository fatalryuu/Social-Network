import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'
import {AppDispatch, AppStateType} from "../../redux/store";
import icon from '../../img/iconW.png';

const Login: React.FC = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);

    const dispatch: AppDispatch = useDispatch();

    const {register, handleSubmit, setError, clearErrors, formState: {errors}, reset} = useForm({mode: "all"});
    const onSubmit = (data: any) => {
        dispatch(login(data.email, data.password, data.rememberMe, setError, data.captcha));
        reset({captcha: '', password: ''});
    }

    if (isAuth)
        return <Navigate to={'/profile'}/>

    return (
        <div className={s.wrapper}>
            <img src={icon} alt="" className={s.icon}/>
            <h2 className={s.header}>Sign in to VK</h2>
            <div className={s.acc_info}>
                <p>To sing in, please use the test account:</p>
                <p id="email">testaccforsocialnetwork@gmail.com
                    <button onClick={() => navigator.clipboard.writeText('testaccforsocialnetwork@gmail.com')} className={s.copy}>Copy</button>
                </p>
                <p id="password">1234554321
                    <button onClick={() => navigator.clipboard.writeText('1234554321')} className={s.copy}>Copy</button>
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={s.email} placeholder={"Enter e-mail..."} onFocus={() => clearErrors()} {...register("email", {
                        required: true, pattern: {
                            value: /([a-z]|\d)+@[a-z]+\.[a-z]+/,
                            message: "Please, enter the valid email"
                        }
                    })}/>
                </div>
                <div>
                    <input className={s.password} type={"password"} onFocus={() => clearErrors()}
                           placeholder={"Enter password..."} {...register("password", {required: true, minLength: 8})}/>
                </div>
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
                    <button className={s.sign_in}>Sign in</button>
                </div>
                {errors.server ? <div style={{color: 'red'}}>Incorrect data</div> : null}
            </form>
        </div>
    );
};


export default Login;