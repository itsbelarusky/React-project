import React from "react";
import s from './Dialogs.module.scss';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
       props.addMessageMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;