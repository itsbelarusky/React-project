import React from "react";
import s from './Friends.module.scss';
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {

    let friendsElements = props.state.friends
        .map (f => <FriendsItem name={f.name} id={f.id} />);



    return (
        <div className={s.friendsItems}>
            { friendsElements }
        </div>
    )
}

export default Friends;