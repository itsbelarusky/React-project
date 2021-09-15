import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setFriends,
    setTotalFriendsCount,
    toggleIsFetching,
    unfollow
} from '../../redux/friends-reducer';
import * as axios from 'axios';
import Friends from './Friends';
import Preloader from "../common/Preloader/Preloader";
import {getFriends} from "../../Api/api";

class FriendsContainer extends React.Component {
    //============Аякс запрос на сервак=====================
    componentDidMount() {
        this.props.toggleIsFetching(true);
       getFriends(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
            this.props.setTotalFriendsCount(data.totalCount);

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        getFriends(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Friends totalFriendsCount={this.props.totalFriendsCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        friends={this.props.friends}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setFriends: (friends) => {
//             dispatch(setFriendsAC(friends));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalFriendsCount: (totalCount) => {
//             dispatch(setFriendsTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }


export default connect(mapStateToProps, {
    follow, unfollow, setFriends, setCurrentPage, setTotalFriendsCount, toggleIsFetching
})(FriendsContainer);


