import React from 'react';
import {addPosts, updateNewPostText} from "../../../redux/main-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        posts: state.mainPage.posts,
        newPostText: state.mainPage.newPostText
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPosts: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text)
//             dispatch(action);
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPosts, updateNewPostText})(MyPosts);

export default MyPostsContainer;