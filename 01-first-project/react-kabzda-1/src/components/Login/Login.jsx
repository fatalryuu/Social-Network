import React from 'react';
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => {
        alert(JSON.stringify(d));
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={"Login"} {...register("login", {required: true, maxLength: 20})}/>
                </div>
                <div>
                    <input type={"password"} placeholder={"Password"} {...register("password", {required: true})}/>
                </div>
                <div>
                    <input type="checkbox" {...register("remember")}/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;