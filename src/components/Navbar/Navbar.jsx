import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (

        <header className={s.navbar}>

            <p><img src="https://cdn1.iconfinder.com/data/icons/aami-flat-message-bubbles/64/message-45-256.png"/></p>
            <p className={s.nav}>
                Cloudchat.com
            </p>
            <div className={s.loginBlock}>
                {props.isAuth ? <div className={s.flexNav}>
                    {props.login}<button onClick={props.logout}>Logout</button>
                </div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>

        </header>

    );
};

export default Navbar;