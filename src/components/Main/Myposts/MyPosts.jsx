import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        alert(text);
    }


    let postsElements =
            props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.myposts}>
            <div>
                My posts
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPosts}>add</button>
            {/*Вызываем контент пропсов*/}
            <div>
                {postsElements}
            </div>

            <Post finger='Hello FINGER!!!!'/>


        </div>

    )
};

export default MyPosts;