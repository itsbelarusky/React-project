import React from 'react';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Community from "./components/Community/Community";
import News from "./components/News/News";
import Foto from "./components/Foto/Foto";
import Music from "./components/Music/Music";



const App = (props) => {


    return (

        <div className='app_wrapper'>
            <Navbar/>
            <Sidebar/>
            {/*создаем оболочку будущих страниц и пихаем компоненты*/}
            <div className='app-wrapper-content'>
                {/*маршрутизация(путь к компонентам)*/}

                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} addMessageMessage={props.addMessageMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path='/main' render={() => <Main mainPage={props.state.mainPage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/friends' render={() => <Friends state={props.state.friendsPage}/>}/>
                <Route path='/community' render={() => <Community state={props.state.communityPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/foto' render={() => <Foto/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
            <Footer/>
        </div>
    );
}


export default App;
