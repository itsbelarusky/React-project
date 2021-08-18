import React from 'react';
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import store from "../../redux/redux-store";

const Main = (props) => {


    return (
        <div>
            <MainInfo/>
            <MyPostsContainer />
        </div>

    )
};

export default Main;