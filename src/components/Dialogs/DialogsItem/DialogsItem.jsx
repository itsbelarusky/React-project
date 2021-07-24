import React from 'react';
import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialogsItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;