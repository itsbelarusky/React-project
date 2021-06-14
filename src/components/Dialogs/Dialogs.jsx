import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItem + ' ' + s.active}>
                    <NavLink to='/dialogs/2'>Evgeniy</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/2'>Diana</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/3'>Maksim</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/4'>Oleg</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/5'>Vlad</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/6'>Alina</NavLink>
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