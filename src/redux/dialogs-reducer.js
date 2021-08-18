const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const ADD_UPDATE_NEW_MESSAGE = 'ADD_UPDATE_NEW_MESSAGE';

let initialState = {
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
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessages
            };
        case ADD_NEW_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: newMessage}]
            };
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (newText) => ({type: ADD_UPDATE_NEW_MESSAGE, newMessages: newText});

export default dialogsReducer;