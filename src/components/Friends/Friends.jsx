import React from 'react';
import s from "./Friends.module.scss";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {
                props.friends.map(f => <div key={f.id}>
                    <div className={s.wrapper}>
                        <div className={s.container1}>
                            <NavLink to={'/main/' + f.id}><img className={s.userFoto}
                                                               src={f.photos.small != null ? f.photos.small : userPhoto}/></NavLink>
                            <div>
                                {f.followed ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "31cc9c9a-f3cc-445c-adfe-e74f84386c0b"
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(f.id)
                                            }

                                        });


                                    }}>Follow</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "31cc9c9a-f3cc-445c-adfe-e74f84386c0b"
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(f.id)
                                            }

                                        });

                                        props.follow(f.id)
                                    }}>Unfollow</button>}</div>
                        </div>
                        <div className={s.container2}>
                            <div className={s.container_item}>
                                <div>{f.name}</div>
                                <div>{f.status}</div>
                            </div>
                            <div className={s.container_item}>
                                <div>{"f.location.country"}</div>
                                <div>{"f.location.city"}</div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>)

}
export default Friends

