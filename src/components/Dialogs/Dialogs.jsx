import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>);


    //Мапим messages в новый массив
    let messageElements = props.messages
        .map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;