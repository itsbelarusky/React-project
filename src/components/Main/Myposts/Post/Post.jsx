import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (

        <div className={s.post}>
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
            <div className={s.finger}>
                {props.finger}
            </div>

        </div>
    )
};

export default Post;