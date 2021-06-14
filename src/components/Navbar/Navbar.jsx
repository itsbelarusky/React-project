import React from 'react';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (

        <header className={s.navbar}>

            <p><img src="https://cdn1.iconfinder.com/data/icons/aami-flat-message-bubbles/64/message-45-256.png"/></p>
            <p className={s.nav}>
                Cloudchat.com
            </p>

        </header>

    );
};

export default Navbar;