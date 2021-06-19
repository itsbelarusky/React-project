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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Navbar/>
                <Sidebar/>
                {/*создаем оболочку будущих страниц и пихаем компоненты*/}
                <div className='app-wrapper-content'>
                    {/*маршрутизация(путь к компонентам)*/}
                    <Route>
                        
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/main' component={Main} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/community' component={Community} />
                    <Route path='/news' component={News} />
                    <Route path='/foto' component={Foto} />
                    <Route path='/music' component={Music} />
                    </Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>);
}


export default App;
