import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

//создаем компоненту с разметкой Пропсы
const DialogsItem = (props) => {
    return (
        <div className={s.dialogsItem + ' ' + s.active}>
            <NavLink to={'/dialogs' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='Evgeniy' id='1' />
                <DialogsItem name='Diana' id='1' />
                <DialogsItem name='Alina' id='1' />
                <DialogsItem name='Maksim' id='1' />
                <DialogsItem name='Oleg' id='1' />
                <DialogsItem name='Vlad' id='1' />
            </div>
            <div className={s.messages}>
               <Message message='Hi' />
               <Message message='How is your React?' />
               <Message message='Yo i am pro programmer' />
            </div>
        </div>
    )
}

export default Dialogs;