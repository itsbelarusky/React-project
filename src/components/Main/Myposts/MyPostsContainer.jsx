import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/main-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {
    return {
        posts: state.mainPage.posts,
        newPostText: state.mainPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;