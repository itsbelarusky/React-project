import React from 'react';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Community from "./components/Community/Community";
import News from "./components/News/News";
import Foto from "./components/Foto/Foto";
import Music from "./components/Music/Music";




const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Navbar/>
                <Sidebar/>
                {/*создаем оболочку будущих страниц и пихаем компоненты*/}
                <div className='app-wrapper-content'>
                    {/*маршрутизация(путь к компонентам)*/}

                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> } />
                    <Route path='/main' render={ () => <Main posts={props.posts} /> } />
                    <Route path='/friends' render={ () => <Friends friends={props.friends} /> } />
                    <Route path='/community' render={ () => <Community community={props.community} /> } />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/foto' render={ () => <Foto /> } />
                    <Route path='/music' render={ () => <Music /> } />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>);
}


export default App;
