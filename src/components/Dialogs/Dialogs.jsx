import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItem}>
                    Evgeniy
                </div>
                <div className={s.dialogsItem}>
                    Diana
                </div>
                <div className={s.dialogsItem}>
                    Alina
                </div>
                <div className={s.dialogsItem}>
                    Maksim
                </div>
                <div className={s.dialogsItem}>
                    Oleg
                </div>
                <div className={s.dialogsItem}>
                    Vlad
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How is your React?
                </div>
                <div className={s.message}>
                    Yo i am pro programmer
                </div>
            </div>
        </div>
    )
}

export default Dialogs;