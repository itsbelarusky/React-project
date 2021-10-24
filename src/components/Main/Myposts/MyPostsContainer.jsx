import React from 'react';
import {addPosts} from "../../../redux/main-reducer";
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
        addPosts: (newPostText) => {
            dispatch(addPosts(newPostText));
        }
     }
 }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;