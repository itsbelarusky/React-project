import {friendsAPI} from "../Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';


let initialState = {
    friends: [],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f;
                })
            }
        case SET_FRIENDS: {
            return {...state, friends: action.friends}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_FRIENDS_COUNT: {
            return {...state, totalFriendsCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }


}


export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalFriendsCount = (totalFriendsCount) => ({type: SET_TOTAL_FRIENDS_COUNT, count: totalFriendsCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const followingProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})


//=============thunk======================
export const getFriends = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        friendsAPI.getFriends(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFriends(data.items));
            dispatch(setTotalFriendsCount(data.totalCount));

        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(followingProgress(true, userId));
        friendsAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSucces(userId));
                }
                dispatch(followingProgress(false, userId))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(followingProgress(true, userId));
        friendsAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSucces(userId));
                }
                dispatch(followingProgress(false, userId));

            });
    }
}


export default friendsReducer;