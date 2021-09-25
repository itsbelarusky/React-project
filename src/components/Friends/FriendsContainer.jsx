import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followingProgress,
    setCurrentPage,
    setFriends,
    setTotalFriendsCount,
    toggleIsFetching,
    unfollow
} from '../../redux/friends-reducer';
import Friends from './Friends';
import Preloader from "../common/Preloader/Preloader";
import {friendsAPI} from "../../Api/api";


class FriendsContainer extends React.Component {
    //============Аякс запрос на сервак=====================
    componentDidMount() {
        this.props.toggleIsFetching(true);
        friendsAPI.getFriends(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
            this.props.setTotalFriendsCount(data.totalCount);

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        friendsAPI.getFriends(pageNumber, this.props.pageSize).then(data => {
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
                     followingProgress={this.props.followingProgress}
                     followingInProgress={this.props.followingInProgress}

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
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress
    }
}



export default connect(mapStateToProps, {
    follow, unfollow, setFriends, setCurrentPage, setTotalFriendsCount, toggleIsFetching, followingProgress
})(FriendsContainer);


