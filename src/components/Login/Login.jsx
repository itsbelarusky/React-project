import React from 'react';
import './login.scss'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"main"}/>
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);