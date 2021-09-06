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

class FriendsContainer extends React.Component {
    //============Аякс запрос на сервак=====================
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(response.data.items);
            this.props.setTotalFriendsCount(response.data.totalCount);

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(response.data.items);
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


