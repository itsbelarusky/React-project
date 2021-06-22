import React from 'react';
import s from './Main.module.scss';
import MyPosts from "./Myposts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";

const Main = (props) => {


    return (
        <div>
            <MainInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>

    )
};

export default Main;