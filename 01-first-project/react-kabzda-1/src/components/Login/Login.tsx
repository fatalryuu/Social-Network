import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'
import {AppStateType} from "../../redux/store";

type PropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, setError: any, captcha: string) => void
}

const Login: React.FC<PropsType> = (props) => {
    const {isAuth, captchaUrl, login} = props;
    const {register, handleSubmit, setError, clearErrors, formState: {errors}, reset} = useForm({mode: "all"});
    const onSubmit = (data: any) => {
        login(data.email, data.password, data.rememberMe, setError, data.captcha);
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {login})(Login);