import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'
import {AppDispatch, AppStateType} from "../../redux/store";

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
                <div>
                    <input type={"password"} onFocus={() => clearErrors()}
                           placeholder={"Password"} {...register("password", {required: true, minLength: 8})}/>
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
                    <button>Login</button>
                </div>
                {errors.server ? <div style={{color: 'red'}}>Incorrect data</div> : null}
            </form>
        </div>
    );
};


export default Login;