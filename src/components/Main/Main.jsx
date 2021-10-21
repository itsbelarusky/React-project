import React from 'react';
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";


const Main = (props) => {
    return (
        <div>
            <MainInfo main={props.main} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
};

export default Main;