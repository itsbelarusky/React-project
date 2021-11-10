import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";
import {MyPostReduxForm} from "./MyPostForm";


const MyPosts = React.memo(props => {


    let addNewPost = (values) => {
        props.addPosts(values.newPostText);
    }

    /*==================мапим посты==========================*/
    let postsElements =
            props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.myposts}>
            <div>
                My posts
            </div>
            <MyPostReduxForm onSubmit={addNewPost}/>
            {/*============Вызываем контент пропсов и добавляем посты на страницу==================*/}
            <div>
                {postsElements}
            </div>
        </div>

    )
});

export default MyPosts;