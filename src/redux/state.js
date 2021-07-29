let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
    mainPage: {
        posts: [
            {id: 1, message: 'Hi React is good', likesCount: 23},
            {id: 2, message: 'IT Kamasutra', likesCount: 21},
            {id: 2, message: 'Diana go to the club', likesCount: 22}
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

};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.mainPage.newPostText,
        likesCount: 0
    };

    state.mainPage.posts.push(newPost);
    //==============зануляем поле ввода=====================
    state.mainPage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.mainPage.newPostText = newText;
    rerenderEntireTree(state);
}


export const addMessageMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
        likesCount: 0
    };


    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newMessages) => {
    state.dialogsPage.newMessageText = newMessages;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;