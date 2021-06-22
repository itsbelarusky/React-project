import React from 'react';
import s from './CommunityItem.module.scss';
import {NavLink} from "react-router-dom";


const CommunityItem = (props) => {
    return (
        <div className={s.communityitem}>
            <NavLink to={'/community/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default CommunityItem;