import React from 'react';
import s from './Main.module.css';
import MyPosts from "./Myposts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";
const Main = () => {
    return (
        <div>
            <MainInfo />
            <MyPosts />
        </div>

    )
};

export default Main;