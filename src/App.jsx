import React from 'react';
import './style.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Community from "./components/Community/Community";
import News from "./components/News/News";
import Foto from "./components/Foto/Foto";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MainContainer from "./components/Main/MainContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/Login/Login";




const App = (props) => {


    return (

        <div className='app_wrapper'>
            <NavbarContainer/>
            <Sidebar/>
            {/*создаем оболочку будущих страниц и пихаем компоненты*/}
            <div className='app-wrapper-content'>
                {/*маршрутизация(путь к компонентам)*/}

                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/main/:userId?' render={() => <MainContainer />}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/community' render={() => <Community />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/foto' render={() => <Foto/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
            <Footer/>
        </div>
    );
}


export default App;
