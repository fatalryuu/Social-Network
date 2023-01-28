import React, {Suspense, lazy} from 'react'
import './App.css';
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "@reduxjs/toolkit";
import {initializeApp} from "./redux/appReducer.ts";
import {connect} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import withRouter from "./utils/withRouter";
import Page from "./components/Common/Page/Page";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <SidebarContainer/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path='/Social-Network' element={<Page title="Main"><ProfileContainer/></Page>}/>
                                <Route path='/profile' element={<Page title="Profile"><ProfileContainer/></Page>}/>
                                <Route path='/profile/:userID' element={<Page title="Profile"><ProfileContainer/></Page>}/>
                                <Route path='/news' element={<Page title="News"><News/></Page>}/>
                                <Route path='/dialogs/*' element={<Page title="Dialogs"><DialogsContainer/></Page>}/>
                                <Route path='/users' element={<Page title="Users"><UsersContainer/></Page>}/>
                                <Route path='/music' element={<Page title="Music"><Music/></Page>}/>
                                <Route path='/settings' element={<Page title="Settings"><Settings/></Page>}/>
                                <Route path='/login' element={<Page title="Login"><Login/></Page>}/>
                            </Routes>
                        </Suspense>
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
