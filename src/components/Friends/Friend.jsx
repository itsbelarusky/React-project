import React from 'react';
import s from "./Friends.module.scss";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let Friend = ({friend, followingInProgress, unfollow, follow}) => {


    return <div>
        <div>
            <div className={s.wrapper}>
            <div className={s.container1}>
                <NavLink to={'/main/' + friend.id}>
                    <img className={s.userFoto} src={friend.photos.small != null ? friend.photos.small : userPhoto}/>
                </NavLink>
                <div>
                    {friend.followed
                        ? <button disabled={followingInProgress.some(id => id === friend.id)}
                                  onClick={() => {
                                      unfollow(friend.id)
                                  }}>unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === friend.id)}
                                  onClick={() => {
                                      follow(friend.id)
                                  }}>follow</button>}</div>
            </div>
            <div className={s.container2}>
                <div className={s.container_item}>
                    <div>{friend.name}</div>
                    <div>{friend.status}</div>
                </div>
                <div className={s.container_item}>
                    <div>{"friend.location.country"}</div>
                    <div>{"friend.location.city"}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
}

export default Friend

