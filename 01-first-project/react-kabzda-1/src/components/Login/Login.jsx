import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";

const Login = (props) => {
    const {register, handleSubmit, setError, clearErrors, formState: {errors}, reset} = useForm({mode: "all"});
    const onSubmit = data => {
        props.login(data.email, data.password, data.rememberMe, setError);
        reset();
    }

    if (props.isAuth)
        return <Navigate to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={"Email"} onFocus={() => clearErrors()} {...register("email", {required: true, pattern: {
                            value: /([a-z]|\d)+@[a-z]+\.[a-z]+/,
                            message: "Please, enter the valid email"
                        }})}/>
                </div>
                {errors.email ? <div style={{color: 'red'}}>{errors.email.message}</div> : null}
                <div>
                    <input type={"password"} onFocus={() => clearErrors()} placeholder={"Password"} {...register("password", {required: true, minLength: 8})}/>
                </div>
                {errors.password ? <div style={{color: 'red'}}>{errors.password.message}</div> : null}
                <div>
                    <input type="checkbox" {...register("rememberMe")}/>Remember me
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
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);