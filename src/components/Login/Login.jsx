import React from 'react';
import './login.scss'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)




const Login = (props) => {

    const onSubmit = (formData) => {

    }

    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;