import React from 'react';
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
                </div>
                <div>
                    <button>Login</button>

                </div>
            </form>
        </div>
    );
};

export default LoginForm;