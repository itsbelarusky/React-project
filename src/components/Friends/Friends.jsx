import React from "react";
import s from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {

    let friendsElements = props.friends
        .map (f => <FriendsItem name={f.name} id={f.id} />);



    return (
        <div className={s.friendsItems}>
            { friendsElements }
        </div>
    )
}

export default Friends;