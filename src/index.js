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


ReactDOM.render(
    <React.StrictMode>
        <App posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
