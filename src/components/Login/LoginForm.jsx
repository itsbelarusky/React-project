import React from 'react';
import {Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../validators/validator";

const maxInput15 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"email"}
                           name={"email"}
                           component={Input}
                           validate={[required, maxInput15]}
                    />
                </div>
                <div>
                    <Field placeholder={"password"}
                           name={"password"}
                           component={Input}
                           validate={[required, maxInput15]}
                           type={"password"}
                    />

                </div>
                <div>
                    <Field component={Input}
                           name={"rememberMe"}
                           type={"checkbox"}/>remember me
                </div>
                <div>
                    <button>Login</button>

                </div>
            </form>
        </div>
    );
};

export default LoginForm;