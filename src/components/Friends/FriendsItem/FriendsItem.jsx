import React from 'react';
import s from './FriendsItem.module.scss';
import {NavLink} from "react-router-dom";


const FriendsItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <li><NavLink to={'/friends/' + props.id}>{props.name}</NavLink></li>

        </div>
    );
};

export default FriendsItem;