import React from 'react';
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";


const Main = (props) => {
    return (
        <div>
            <MainInfo main={props.main}/>
            <MyPostsContainer />
        </div>
    )
};

export default Main;