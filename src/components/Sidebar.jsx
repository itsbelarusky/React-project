import React from 'react';
import s from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
           <span className={`${s.item} ${s.active}`}>Sidebar</span>
        </nav>

    );
};

export default Sidebar;