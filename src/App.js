import React from 'react';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (

        <div className='app_wrapper'>
            <Navbar/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                {/*<Dialogs/>*/}
            </div>
            <Main />
            <Footer/>

        </div>);
}


export default App;
