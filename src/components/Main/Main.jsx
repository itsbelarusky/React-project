import React from 'react';
import s from './Main.module.css';
import MyPosts from "./Myposts/MyPosts";
const Main = () => {
    return (
        <div className={s.main}>
            <div>
                <img src="https://pixabay.com/get/g7f1a243dbf7b43a2d4ea533b336682ae114dae82b9dec0ec101383fc51658f2aec07bb0f01b548df52724884515ee66c_1280.png" alt=""/>
            </div>
            <div>awdawdawaada</div>
            <MyPosts />
        </div>




    );
};

export default Main;