import {friendsAPI, MainAPI} from "../Api/api";



const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_FRIEND_PROFILE = 'SET_FRIEND_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi React is good', likesCount: 23},
        {id: 2, message: 'IT Kamasutra', likesCount: 21},
        {id: 3, message: 'Diana go to the club', likesCount: 22}
    ],
    newPostText: "",
    main: null,
    status: ""
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 1
            };
            //============Делаем копию массива=============
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case ADD_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_FRIEND_PROFILE: {
            return {...state, main: action.main}
        }
        default:
            return state;
    }
}

export const addPosts = () => ({type: ADD_POST});
export const setFriendsProfile = (main) => ({type: SET_FRIEND_PROFILE, main});
export const updateNewPostText = (text) => ({type: ADD_NEW_POST_TEXT, newText: text});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getFriendsProfile = (userId) => {
    return (dispatch) => {
        friendsAPI.getMain(userId).then(response => {
            dispatch(setFriendsProfile(response.data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        MainAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        MainAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}


export default mainReducer;