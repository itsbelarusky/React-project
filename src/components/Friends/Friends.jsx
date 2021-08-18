import React from "react";
import s from './Friends.module.scss';


const Friends = (props) => {
    if (props.friends.length === 0) {
        props.setFriends(
            [
                {
                    id: 1,
                    photoUrl: 'https://avavatar.ru/images/avatars/6/avatar_qaSipLk8bfL0xTI6.jpg',
                    followed: false,
                    name: 'Evgeniy',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2, photoUrl: 'https://avavatar.ru/images/avatars/6/avatar_qaSipLk8bfL0xTI6.jpg',
                    followed: true, name: 'Diana', status: 'Love pirojok', location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://avavatar.ru/images/avatars/6/avatar_qaSipLk8bfL0xTI6.jpg',
                    followed: false,
                    name: 'Alina',
                    status: 'I like drink vodka',
                    location: {city: 'Zhlobin', country: 'Belarus'}
                },
                {
                    id: 4,
                    photoUrl: 'https://avavatar.ru/images/avatars/6/avatar_qaSipLk8bfL0xTI6.jpg',
                    followed: false,
                    name: 'Valera',
                    status: 'Driving big cars',
                    location: {city: 'Zhlobin', country: 'Belarus'}
                },
            ]
        )
    }

    return (
        props.friends.map(f => <div key={f.id}>
            <div className={s.wrapper}>
                <div className={s.container1}>
                    <div>
                        <img className={s.userFoto} src={f.photoUrl} alt=""/>
                        <div>
                            {f.followed
                                ? <button onClick={() => {props.unfollow(f.id)}}>Follow</button>
                                : <button onClick={() => {props.follow(f.id)}}>Unfollow</button>}
                        </div>
                    </div>

                    <div className={s.userItem}>
                        <div>{f.name}</div>
                        <div>{f.status}</div>
                    </div>
                </div>
                <div className={s.container2}>
                    <div>{f.location.country}</div>
                    <div>{f.location.city}</div>
                </div>
            </div>
        </div>))
}


export default Friends;