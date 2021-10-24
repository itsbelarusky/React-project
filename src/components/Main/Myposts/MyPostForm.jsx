import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validator";
import Textarea from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newPostText"}
                       placeholder={"Enter Your message"}
                       validate={[required, maxLength10]}
                />

            </div>
            <button>add</button>
        </form>
    );
};

export const MyPostReduxForm = reduxForm({form: "addPostForm"})(MyPostForm)

export default MyPostForm;