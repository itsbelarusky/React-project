import React from 'react';
import './style.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";



const App = () => {
    return (

            <div className='app_wrapper'>
                <Navbar />
                <Main />
                <Sidebar />
                <div className="content1">Content1</div>
                <div className="content2">Content2</div>
                <div className="content3">Content3</div>
                <Footer />

            </div>);
}


export default App;
