import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    let postsElements =
            props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.myposts}>
            <div>
                My posts
            </div>
            <div>
                <textarea ref={newPostElement}/>
            </div>
            <button onClick={addPosts}>add</button>
            {/*Вызываем контент пропсов*/}
            <div>
                {postsElements}
            </div>




        </div>

    )
};

export default MyPosts;