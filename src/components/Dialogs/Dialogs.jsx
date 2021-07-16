import React from "react";
import s from './Dialogs.module.scss';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>);


    //Мапим messages в новый массив
    let messageElements = props.state.messages
        .map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;