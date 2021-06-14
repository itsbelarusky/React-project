import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (

        <div className={s.myposts}>
            <textarea name="" id="" cols="40" rows="2">Enter</textarea>
            <span>like</span>
            {/*Вызываем контент пропсов*/}
            <Post message='Hi React its good!' likesCount='23'/>
            <Post message='Matafaka!!!' likesCount='0'/>
            <Post finger='Hello FINGER!!!!'/>
            <Post finger='Props 2!!!!'/>
            <Post finger='Props 3!!!!'/>


        </div>

    )
};

export default MyPosts;