import React from 'react';
import s from './MainInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import MainStatusWithHooks from "./MainStatusWithHooks";


const MainInfo = ({main, status, updateStatus}) => {
    if (!main) {
        return <Preloader/>
    }
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg" alt=""/>
            <div className={s.descriptionBlock}>
                <img src={main.photos.small} className={s.mainFoto}/>
                <MainStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div>{main.aboutMe}</div>
            <div>{main.contacts.vk}</div>
            <div>{main.fullName}</div>

        </div>


    );
};

export default MainInfo;