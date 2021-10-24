import React from 'react';
import {Field, reduxForm} from "redux-form";
import Textarea from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../validators/validator";

const maxLength100 = maxLengthCreator(100)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageText"}
                       validate={[required, maxLength100]}
                       placeholder={"Enter your message"}/>
                <div>
                    <button>add message</button>
                </div>
            </div>
        </form>
    );
};

export const DialogsFormRedux = reduxForm({form: "addMessageForm"})(DialogsForm)

export default DialogsForm;