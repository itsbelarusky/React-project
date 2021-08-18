import React from "react";

import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setFriendsAC, unfollowAC} from "../../redux/friends-reducer";



let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends));
        }

    }
}




const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer