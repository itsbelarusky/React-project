import React from 'react';
import MyPosts from "./Myposts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";

const Main = (props) => {


    return (
        <div>
            <MainInfo/>
            <MyPosts posts={props.mainPage.posts} dispatch={props.dispatch} />
        </div>

    )
};

export default Main;