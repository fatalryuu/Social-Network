import React from 'react'
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "@reduxjs/toolkit";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import withRouter from "./withRouter";

class App extends React.Component {
    componentDidMount() {
        debugger;
        this.props.initializeApp();
    }

    render() {
        debugger;
        if (!this.props.initialized)
            return <Preloader />
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <SidebarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={process.env.PUBLIC_URL} element={<ProfileContainer isMain={true}/>}/>
                            <Route path='/profile' element={<ProfileContainer isMain={true}/>}/>
                            <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
