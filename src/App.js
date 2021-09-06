import React from 'react';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
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




const App = (props) => {


    return (

        <div className='app_wrapper'>
            <Navbar/>
            <Sidebar/>
            {/*создаем оболочку будущих страниц и пихаем компоненты*/}
            <div className='app-wrapper-content'>
                {/*маршрутизация(путь к компонентам)*/}

                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/main' render={() => <MainContainer />}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
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
