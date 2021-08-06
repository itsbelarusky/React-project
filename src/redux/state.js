const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

let store = {
    _state: {
        mainPage: {
            posts: [
                {id: 1, message: 'Hi React is good', likesCount: 23},
                {id: 2, message: 'IT Kamasutra', likesCount: 21},
                {id: 3, message: 'Diana go to the club', likesCount: 22}
            ],
            newPostText: 'it-kamasutra'

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
                {id: 5, name: 'Maksim'},
                {id: 6, name: 'Maksim'},
                {id: 7, name: 'Maksim'},

            ],
            newMessageText: 'dadadad'
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
    rerenderEntireTree() {
        console.log('state changed');
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.mainPage.newPostText,
                likesCount: 0
            };

            this._state.mainPage.posts.push(newPost);
            //==============зануляем поле ввода=====================
            this._state.mainPage.newPostText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'ADD-NEW-POST-TEXT') {
            this._state.mainPage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
                likesCount: 0
            };


            this._state.dialogsPage.messages.push(newMessage);
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMessages;
            this.rerenderEntireTree(this._state);
        }
    }

}
//Функции action creator
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: ADD_NEW_POST_TEXT, newText: text});




export default store;