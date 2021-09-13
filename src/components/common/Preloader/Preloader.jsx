import React from 'react';
import s from "../../Friends/Friends.module.scss";
import preloader from "../../../assets/images/Spinner-5.gif";

const Preloader = (props) => {
    return (
        <div>
            <img className={s.loader} src={preloader}/>
        </div>
    );
};

export default Preloader;