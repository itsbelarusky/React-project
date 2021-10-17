import React from "react";
import s from './Dialogs.module.scss';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    //Мапим messages в новый массив
    let messageElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.updateNewMessage(newText)
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
            <div>
                <textarea onChange={onMessageChange} value={newMessageText}/>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;