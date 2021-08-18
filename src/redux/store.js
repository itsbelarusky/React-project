import friendsReducer from "./friends-reducer";
import communityReducer from "./community-reducer";
import mainReducer from "./main-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        mainPage: {
            posts: [
                {id: 1, message: 'Hi React is good', likesCount: 23},
                {id: 2, message: 'IT Kamasutra', likesCount: 21},
                {id: 3, message: 'Diana go to the club', likesCount: 22}
            ],
            newPostText: ''

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your React?'},
                {id: 3, message: 'Yo i am pro programmer'},
                {id: 4, message: 'I love play Pubg'}
            ],

            dialogs: [
                {id: 1, name: 'Evgeniy'},
                {id: 2, name: 'Diana'},
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Maksim'},
            ],
            newMessageText: ''
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Evgeniy'},
                {id: 2, name: 'Diana'},
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Maksim'},
                {id: 5, name: 'Oleg'},
                {id: 6, name: 'Vlad'}
            ]
        },
        communityPage: {
            community: [
                {id: 1, name: 'Dobry Zhlobin'},
                {id: 2, name: 'Anekdots'},
                {id: 3, name: 'Leonardo dai vinchik'},
                {id: 4, name: 'Cars Motors'},
                {id: 5, name: 'Funny chats'}
            ]
        }

    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.mainPage = mainReducer(this._state.mainPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._state.communityPage = communityReducer(this._state.communityPage, action);

        this.rerenderEntireTree(this._state);

    }

}

export default store;