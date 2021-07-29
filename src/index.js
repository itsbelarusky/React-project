import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMessageMessage, updateNewMessageText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                 addMessageMessage={addMessageMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree);


reportWebVitals();
