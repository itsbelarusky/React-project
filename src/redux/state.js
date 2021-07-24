import {rerenderEntireTree} from "../render";


let state = {
    mainPage: {
        posts: [
            {id: 1, message: 'Hi React is good', likesCount: 23},
            {id: 2, message: 'IT Kamasutra', likesCount: 21},
            {id: 2, message: 'Diana go to the club', likesCount: 22}
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
            {id: 5, name: 'Oleg'},
            {id: 7, name: 'Vlad'},
            {id: 8, name: 'Vlad'},
            {id: 9, name: 'Vlad'}
        ]
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

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.mainPage.newPostText,
        likesCount: 0
    };
    state.mainPage.posts.push(newPost);
    state.mainPage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.mainPage.newPostText = newText;
    rerenderEntireTree(state);

}

export default state;