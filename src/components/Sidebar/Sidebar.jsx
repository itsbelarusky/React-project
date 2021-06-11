import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.list}>
                <li>Моя страница</li>
                <li>Сообщения</li>
                <li>Друзья</li>
                <li>Сообщества</li>
                <li>Новости</li>
                <li>Фотографии</li>
                <li>Музыка</li>
            </ul>
        </nav>
    );
};

export default Sidebar;