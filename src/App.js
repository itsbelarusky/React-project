import React from 'react';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MyPosts from "./components/Main/Myposts/MyPosts";



const App = () => {
    return (

            <div className='app_wrapper'>
                <Navbar />
                <Main />
                <Sidebar />
                <MyPosts />

                <div className="content3">Content3</div>
                <Footer />

            </div>);
}


export default App;
