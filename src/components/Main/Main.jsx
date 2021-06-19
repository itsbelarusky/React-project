import React from 'react';
import s from './Main.module.css';
import MyPosts from "./Myposts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";

const Main = (props) => {


    return (
        <div>
            <MainInfo/>
            <MyPosts posts={props.posts}/>
        </div>

    )
};

export default Main;