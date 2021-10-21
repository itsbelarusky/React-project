import React from 'react';
import s from './MainInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import MainStatus from  "./MainStatus"


const MainInfo = (props) => {
    if(!props.main) {
        return <Preloader/>
    }
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg" alt=""/>
            <div className={s.descriptionBlock}>
                <img src={props.main.photos.small} className={s.mainFoto} />
                <MainStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>{props.main.aboutMe}</div>
            <div>{props.main.contacts.vk}</div>
            <div>{props.main.fullName}</div>

        </div>




    );
};

export default MainInfo;