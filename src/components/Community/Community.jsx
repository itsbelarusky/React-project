import React from "react";
import s from './Community.module.css';
import CommunityItem from "./CommunityItem/CommunityItem";

const Community = (props) => {

    let communityElements = props.community
        .map (c => <CommunityItem name={c.name} id={c.id} />);

    return (
        <div>
            { communityElements }
        </div>
    )
}

export default Community;