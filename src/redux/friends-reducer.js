const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT= 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING';



let initialState = {
    friends: [],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true

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
        default:
            return state
    }


}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalFriendsCount = (totalFriendsCount) => ({type: SET_TOTAL_FRIENDS_COUNT, count: totalFriendsCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export default friendsReducer;