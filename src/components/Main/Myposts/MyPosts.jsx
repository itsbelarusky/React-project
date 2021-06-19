import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements =
            props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.myposts}>
            <div>
                My posts
            </div>
            <div>
                <textarea name="" id="" cols="40" rows="2">Enter</textarea>
            </div>
            <span>like</span>
            {/*Вызываем контент пропсов*/}
            <div>
                {postsElements}
            </div>

            <Post finger='Hello FINGER!!!!'/>


        </div>

    )
};

export default MyPosts;