import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (

        <div className={s.container}>
            <div className={s.post}>
                {props.message}
                <div>
                    <div>like {props.likesCount}</div>
                </div>
            </div>
        </div>
    )
};

export default Post;