import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi React is good', likesCount: 23},
    {id: 2, message: 'Matafaka', likesCount: 22},
    {id: 2, message: 'Diana go to the club', likesCount: 22}
]

let dialogs = [
    {id: 1, name: 'Evgeniy'},
    {id: 2, name: 'Diana'},
    {id: 3, name: 'Alina'},
    {id: 4, name: 'Maksim'},
    {id: 5, name: 'Oleg'},
    {id: 7, name: 'Vlad'},
    {id: 8, name: 'Vlad'},
    {id: 9, name: 'Vlad'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your React?'},
    {id: 3, message: 'Yo i am pro programmer'},
    {id: 4, message: 'I love play Pubg'}
]

let friends = [
    {id: 1, name: 'Evgeniy'},
    {id: 2, name: 'Diana'},
    {id: 3, name: 'Alina'},
    {id: 4, name: 'Maksim'},
    {id: 5, name: 'Oleg'},
    {id: 6, name: 'Vlad'}
]

let community = [
    {id: 1, name: 'Dobry Zhlobin'},
    {id: 2, name: 'Anekdots'},
    {id: 3, name: 'Leonardo dai vinchik'},
    {id: 4, name: 'Cars Motors'},
    {id: 5, name: 'Sex chats'}
]


ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages} friends={friends} community={community} />


    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
