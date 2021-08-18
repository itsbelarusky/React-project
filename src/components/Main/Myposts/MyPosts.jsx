import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";





const MyPosts = (props) => {

    let newPostElement = React.createRef();
    /*================функция добавляющая новый пост в textarea===============*/
    let addPosts = () => {
        props.addPosts();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    /*==================мапим посты==========================*/
    let postsElements =
            props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.myposts}>
            <div>
                My posts
            </div>
            <div>
                {/*============ связываем textarea с функцией ссылкой===============*/}
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={addPosts}>add</button>
            {/*============Вызываем контент пропсов и добавляем посты на страницу==================*/}
            <div>
                {postsElements}
            </div>
        </div>

    )
};

export default MyPosts;