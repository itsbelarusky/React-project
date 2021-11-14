import React from 'react';
import Paginator from "../common/paginator/Paginator";
import Friend from "./Friend";


let Friends = ({currentPage, onPageChanged, totalFriendsCount, pageSize, friends, ...props}) => {


    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalFriendsCount={totalFriendsCount}
                   pageSize={pageSize} friends={friends}/>
        {
            friends.map(f =><Friend friend={f} follow={props.follow}
                                    key={f.id}
                                    unfollow={props.unfollow}
                                    followingInProgress={props.followingInProgress}

            /> )
        }
    </div>

}
export default Friends

