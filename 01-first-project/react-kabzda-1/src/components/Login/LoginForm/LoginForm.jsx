import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => {
        alert(JSON.stringify(d));
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={"Login"} {...register("login")}/>
            </div>
            <div>
                <input type={"password"} placeholder={"Password"} {...register("password")}/>
            </div>
            <div>
                <input type="checkbox" {...register("remember")}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default LoginForm;