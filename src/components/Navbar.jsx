import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (

        <header className={s.navbar}>

            <p><img src="https://img.icons8.com/fluent/144/000000/prodigy.png"/></p>
            <p className={s.nav}>
                GreenChat.com
            </p>

        </header>

    );
};

export default Navbar;