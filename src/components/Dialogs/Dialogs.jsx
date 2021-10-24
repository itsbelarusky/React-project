import React from "react";
import s from './Dialogs.module.scss';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {DialogsFormRedux} from "./DialogsForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    //Мапим messages в новый массив
    let messageElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageText = state.newMessageText;

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    //    ======================redirect на логин=======================
    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <DialogsFormRedux onSubmit={addNewMessage} />

        </div>
    )
}

export default Dialogs;