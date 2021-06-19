import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Maksim'},
        {id: 5, name: 'Oleg'},
        {id: 7, name: 'Vlad'},
        {id: 8, name: 'Vlad'},
        {id: 9, name: 'Vlad'}
    ]

    let dialogsElements = dialogs
        .map(d => <DialogsItem name={d.name} id={d.id} />);

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your React?'},
        {id: 3, message: 'Yo i am pro programmer'},
        {id: 4, message: 'I love play Pubg'}
    ]
    //Мапим messages в новый массив
    let messageElements = messages
        .map(m => <Message message={m.message} />);


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