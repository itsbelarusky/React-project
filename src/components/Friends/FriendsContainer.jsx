import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followingProgress, getFriends,
    setCurrentPage,
    unfollow
} from '../../redux/friends-reducer';
import Friends from './Friends';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalFriendsCount, getUsers
} from "../../redux/friends-selectors";


class FriendsContainer extends React.Component {
    //============Аякс запрос на сервак=====================
    componentDidMount() {

        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getFriends(pageNumber, this.props.pageSize)
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
                     followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}



// let mapStateToProps = (state) => {
//     return {
//         friends: state.friendsPage.friends,
//         pageSize: state.friendsPage.pageSize,
//         totalFriendsCount: state.friendsPage.totalFriendsCount,
//         currentPage: state.friendsPage.currentPage,
//         isFetching: state.friendsPage.isFetching,
//         followingInProgress: state.friendsPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        friends: getUsers(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let AuthRedirectComponent = withAuthRedirect(FriendsContainer)



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, followingProgress, getFriends
    })
)(FriendsContainer)


