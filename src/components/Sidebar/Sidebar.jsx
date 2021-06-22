import React from 'react';
import s from './Sidebar.module.scss';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.list}>
                <li><NavLink activeClassName={s.activeLink} to='/main'>Моя страница</NavLink></li>
                <li><NavLink activeClassName={s.activeLink} to="/dialogs">Сообщения</NavLink></li>
                <li><NavLink activeClassName={s.activeLink} to="/friends">Друзья</NavLink></li>
                <li><NavLink activeClassName={s.activeLink} to="/community">Сообщества</NavLink></li>
                <li><NavLink activeClassName={s.activeLink} to="/news">Новости</NavLink></li>
                <li><NavLink activeClassName={s.activeLink} to="/foto">Фотографии</NavLink></li>
                <li><NavLink activeClassName={s.activeLink} to="/music">Музыка</NavLink></li>
            </ul>
        </nav>
    );
};

export default Sidebar;