import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";

const Login = (props) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        props.login(data.email, data.password, data.rememberMe);
    }

    if (props.isAuth)
        return <Navigate to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={"Email"} {...register("email", {required: true, maxLength: 40})}/>
                </div>
                <div>
                    <input type={"password"} placeholder={"Password"} {...register("password", {required: true})}/>
                </div>
                <div>
                    <input type="checkbox" {...register("rememberMe")}/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
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