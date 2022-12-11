import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <SidebarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={process.env.PUBLIC_URL} element={<Profile />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
